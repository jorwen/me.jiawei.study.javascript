//让我们来分解一下，以便代码各自存放到各自的对象里，为此，我们参考了martinfowler的事件聚合（Event Aggregator）理论在处理代码以便各对象之间进行通信。
//首先我们先来实现事件聚合的功能，该功能分为2部分，1个是Event，用于Handler回调的代码，1个是EventAggregator用来订阅和发布Event，代码如下：

function Product(id, description)
{
    this.getId = function ()
    {
        return id;
    };
    this.getDescription = function ()
    {
        return description;
    };
}

function Cart(eventAggregator)
{
    var items = [];

    this.addItem = function (item)
    {
        items.push(item);
        eventAggregator.trigger("itemAdded", item);
    };
}

function CartController(cart, eventAggregator)
{
    eventAggregator.attach("itemAdded", function (eventArgs)
    {
        var newItem = $('<li></li>').html(eventArgs.getDescription()).attr('id-cart', eventArgs.getId()).appendTo("#cart");
    });

    eventAggregator.attach("productSelected", function (eventArgs)
    {
        cart.addItem(eventArgs.product);
    });
}

function ProductRepository()
{
    var products = [new Product(1, "Star Wars Lego Ship"),
        new Product(2, "Barbie Doll"),
        new Product(3, "Remote Control Airplane")];

    this.getProducts = function ()
    {
        return products;
    }
}

function ProductController(eventAggregator, productRepository)
{
    var products = productRepository.getProducts();

    function onProductSelected()
    {
        var productId = $(this).attr('id');
        var product = $.grep(products, function (x)
        {
            return x.getId() == productId;
        })[0];
        eventAggregator.trigger("productSelected", {
            product: product
        });
    }

    products.forEach(function (product)
    {
        var newItem = $('<li></li>').html(product.getDescription())
            .attr('id', product.getId())
            .dblclick(onProductSelected)
            .appendTo("#products");
    });
}

(function ()
{
    var eventAggregator = new EventAggregator(),
        cart = new Cart(eventAggregator),
        cartController = new CartController(cart, eventAggregator),
        productRepository = new ProductRepository(),
        productController = new ProductController(eventAggregator, productRepository);
})();

function Event(name)
{
    var handlers = [];

    this.getName = function ()
    {
        return name;
    };

    this.addHandler = function (handler)
    {
        handlers.push(handler);
    };

    this.removeHandler = function (handler)
    {
        for (var i = 0; i < handlers.length; i++)
        {
            if (handlers[i] == handler)
            {
                handlers.splice(i, 1);
                break;
            }
        }
    };

    this.fire = function (eventArgs)
    {
        handlers.forEach(function (h)
        {
            h(eventArgs);
        });
    };
}

function EventAggregator()
{
    var events = [];

    function _getEvent(eventName)
    {
        return $.grep(events, function (event)
        {
            return event.getName() === eventName;
        })[0];
    }

    this.trigger = function (eventName, eventArgs)
    {
        var event = _getEvent(eventName);

        if (!event)
        {
            event = new Event(eventName);
            events.push(event);
        }
        event.fire(eventArgs);
    };

    this.attach = function (eventName, handler)
    {
        var event = _getEvent(eventName);

        if (!event)
        {
            event = new Event(eventName);
            events.push(event);
        }

        event.addHandler(handler);
    };
}
