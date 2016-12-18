$("p:even");//选择偶数<p>，或odd奇数
$("td:nth-child(1)");//选择第一列
$("body > div:has(a)");//body子元素包含a的div
$("p a.myclass");//p的子元素a而且有myclass样式
$("foo:not(bar:has(baz))");//只支持一层嵌套
$("p:only-child");//返回没有兄弟节点的所有元素
$("p:nth-child(even)");//技术子节点
$("p:nth-child(3n)");//3的倍数子节点，公式是xn+y
$("p:gt(n)");//>n的子节点，小于是lt
$("img[title]").not("[title*=puppy]");//不包含puppy的title的img