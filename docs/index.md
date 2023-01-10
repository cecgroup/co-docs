# 快速开始
## 简介
&emsp;&emsp;涛勰云是涛勰科技自主研发的云教学云办公解决方案，底座采用全自主研发，上层基于微软云桌面。支持包含电脑、手机、平板、树莓派、瘦客户机等全终端设备，同时支持APP客户端、IE浏览器、H5浏览器、订阅等多种方式进行访问。

## 各终端支持访问方式
* Windows电脑终端：IE浏览器，订阅，APP客户端
* MAC电脑终端：APP客户端
* 手机终端：APP客户端
* 平板终端：APP客户端
* 树莓派/瘦客户机终端：嵌入式系统
* H5浏览器本身可以作为独立终端，所以以上设备终端也均支持H5浏览器的方式进行访问

## IE浏览器（Windows电脑终端）
&emsp;&emsp;Windows终端可以通过IE浏览器访问，实际是系统自带了“远程桌面连接”APP客户端工具，通过浏览器调用工具打开远程应用或桌面。

&emsp;&emsp;注意：WinXP和Win7在非局域网环境下并不支持IE浏览器方式访问，请参照H5浏览器。

1. 打开IE浏览器，地址栏输入https://tx.cec.cc，后端会自动识别转向H4站点，即https://tx.cec.cc/rdweb/pages/，输入用户名和密码进行登录。点击应用或桌面图标即可使用；
2. 首次登录会提示保存密码，点击“是”，方便下次登陆；
3. 首次登录还会提示是否运行加载项，点击“允许”，可以实现更佳访问云应用和云桌面体验；
4. 非同域中电脑首次打开会提示信任发布者提示，勾选“不再询问我是否从此发布者进行远程连接”，可获得更佳的单点访问体验。

## H5浏览器（全终端）
&emsp;&emsp;目前主流的浏览器都支持Html5：360浏览器、Edge、Opera、Chrome、Safari、Firefox等。
1. H5浏览器只需输入https://tx.cec.cc，后端会自动识别转向H5站点，即https://tx.cec.cc/rdweb/webclient；
2. 登陆到资源页面可就以访问远程应用和桌面了，部分应用不能支持，可以采用登陆桌面方式进行访问；如果要输入中文，需要点击右上角“设置”按钮，注意切换语言略有不同（单键Shift）；
3. 点击进入远程应用或桌面，图为H5浏览器的嵌入式访问效果。


## 订阅（Windows电脑终端）
1. 控制面板打开RemoteApp与桌面连接。
2. 按照向导输入URL地址：https://tx.cec.cc 或者 demo@cec.cc（个人账号）；
3. 最后就可在开始程序菜单直接访问远程应用和桌面。


## APP客户端（手机终端、平板终端、MAC电脑终端、Windows电脑终端）
&emsp;&emsp;不同终端系统的APP客户端不同，但大同小异，本示例以Andriod手机为例。首先根据系统点击以下对应的链接进行下载安装；
* [macOS（MAC）](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466)
* [Andrid（Andriod手机或平板）](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Andriod.apk
* [iOS（iPhone/iPad）](https://apps.apple.com/cn/app/microsoft-yuan-cheng-zhuo/id714464092)
* Windows/WP（电脑终端/移动终）：系统自带“远程桌面连接”APP客户端，无需下载

1. 下载安装好APP后，打开应用，点击右上角的加号，选择“Remote Resource Feed”，Feed URL输入https://tx.cec.cc 或者 demo@wsii.cn（个人账号），添加个人用户名和密码并保存；
2. 然后直接点击应用或桌面，下图2展示了手机打开CAD2020的效果；
3. 移动端的鼠标分Touch和Mouse pointer操作，具体可参照下图。


## 嵌入式系统（树莓派/瘦客户机终端）
&emsp;&emsp;树莓派/瘦客户机终端的嵌入式系统比较复杂，不适合普通用户，主要针对嵌入开发爱好者，这里只做个简单展示。

1. 左图为树莓派接4K电视屏幕的效果图，手机拍摄颜色失真，实际动静态4K效果都非常不错；当然支持任何电脑显示器，是传统PC台式机的最佳替代品；
2. 右图为实际树莓派，比一般手机还小，麻雀虽小，五脏俱全。