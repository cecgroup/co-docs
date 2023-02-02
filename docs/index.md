# 快速开始
## 简介
&emsp;&emsp;工一云电脑是涛勰科技自主研发的一整套云教学、云办公的解决方案。底座采用自主研发，上层基于主流的微软桌面，是通过多年探索研发的集大成产品。支持包含各种电脑、手机、平板、单片机、零瘦客户机等全终端设备，同时支持APP客户端、浏览器、订阅等多种方式进行访问。

## 推荐的访问方式
&emsp;&emsp;云电脑访问方式有多种，包含APP客户端、浏览器、订阅、IE浏览器、特殊程序的方式进行访问，但最常用的方式是APP客户端和浏览器方式。  
&emsp;&emsp;访问方式选择总体建议：支持APP客户端的首先推荐APP客户端访问，其次是浏览器访问；临时性访问推荐直接浏览器访问。具体如下：
|操作系统       |台式/一体机/笔记本/微型电脑/虚拟机|平板      |手机|单片机  |零瘦客户端|
|---------------|--------------------------------|----------|----|-------|---------|
|Windows        |APP, 浏览器, 订阅, IE浏览器       |同左      |   |          |       |
|Andriod        |                                |APP, 浏览器|APP|        |       |
|iOS            |                                |          |APP|        |       |
|iPadOS         |                                |APP, 浏览器|   |        |       |
|macOS          |APP, 浏览器                    |          |   |        |       |
|ChromeOS       |                                |APP, 浏览器|APP|        |       |
|HarmonyOS      |                                |APP, 浏览器|APP|        |       |
|WinPhoneOS     |                                |          |APP|        |       |
|RaspBerryOS    |                                |          |   |特殊程序|       |
|ThinOS         |                                |           |  |       |特殊程序|
|Linux Desktop  |浏览器                          |浏览器     |   |       |       |
|Linux Server   |特殊程序                        |           |  |特殊程序|特殊程序|

<!-- * Windows+台式/笔记本/微型电脑：浏览器、IE浏览器、订阅
* Andriod/HarmonyOS/iOS+手机：APP客户端
* Andriod/HarmonyOS/iPadOS/macOS/ChromeOS+平板/一体机/笔记本：APP客户端、浏览器
* Linux Desktop(RaspBerryOS, Ubuntu, Debian, Centos, Redhat...)+单片机/虚拟机/台式/笔记本/微型电脑：浏览器
* Linux Server(RaspBerryOS, Ubuntu, Debian, Centos, Redhat...)+单片机/虚拟机/台式/笔记本/微型电脑：特殊程序
* ThinOS(Dell, HP...)+瘦客户端：特殊程序 -->

## APP
### APP客户端下载链接
* [Windows](https://apps.microsoft.com/store/detail/microsoft-%E8%BF%9C%E7%A8%8B%E6%A1%8C%E9%9D%A2/9WZDNCRFJ3PS) 注：此链接为Microsoft市场，国内用户如果无法下载，请点击以下链接下载
  * [Windows 11](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Windows.AppxBundle)
  * [Windows 10](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Windows.zip)
* [Andriod/ChromeOS](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&pli=1) 注：此链接为Google市场，国内用户请点击以下链接下载
  * [Andriod最新版](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Andriod_Latest.apk)
  * [Andriod 9.0+](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Andriod9.0.apk)
  * [Andriod 8.0+](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Andriod8.0.apk)
  * [Andriod 7.0+](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Andriod7.0.apk)
  * [Andriod 6.0+](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Andriod6.0.apk)
  * [Andriod 6.0+旧版兼容版](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Andriod_Old.apk)
  * [Andriod 4.0+](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_Andriod4.0.apk)
* [HarmonyOS](https://tx.cec.cc/RDWeb/Pages/downloads/Microsoft_Remote_Desktop_for_HarmonyOS.apk)注：如果此应用不兼容，可以下载上面Andriod的老版本依次测试
* [iOS/iPadOS](https://apps.apple.com/cn/app/microsoft-yuan-cheng-zhuo/id714464092)
* [macOS](https://apps.apple.com/us/app/microsoft-remote-desktop/id1295203466)

&emsp;&emsp;适合支持安装APP客户端的系统。  
&emsp;&emsp;不同终端系统的APP客户端不同，但操作大同小异，本示例以Andriod手机为例。首先根据系统点击以下对应的链接进行下载安装；
1. 下载安装好APP客户端后，打开应用，点击右上角的加号，选择“添加工作区”，外网输入"tx2.cec.cc:8000"，内网输入"tx.cec.cc"，用户账户点击下拉选择“添加用户账户”，输入个人账号demo@cec.cc和个人密码并点击保存；
2. 然后点击右上角的“下一步”，等待加载一两秒钟，点击“工作区”，此时会显示所有的应用程序和桌面资源；
3. 点击桌面或应用会弹出一个连接选项框，点击“连接”；
4. 进入桌面或应用后，顶部会出现一个鼠标键盘选项，移动端的鼠标操作分触屏模式和鼠标模式，根据习惯选择对应的模式即可。

## 浏览器
&emsp;&emsp;适用于所有安装有H5浏览器的桌面系统。  
&emsp;&emsp;目前主流的浏览器都支持Html5：360、Edge、Opera、Chrome、Safari、Firefox浏览器等。
1. H5浏览器只需输入https://tx.cec.cc ，<!-- ，后端会自动识别转向H5站点，即https://tx.cec.cc/rdweb/webclient ； -->输入用户名和密码进行登录；
2. 登陆到资源页面可就以访问远程应用和桌面了，部分应用不能支持，可以采用登陆桌面方式进行访问；如果要输入中文，需要点击右上角“设置”按钮，注意切换语言略有不同（单键Shift）；
3. 点击进入远程应用或桌面，图为H5浏览器的嵌入式访问效果。

## 订阅
&emsp;&emsp;仅适用于windows桌面系统。  
1. 控制面板打开RemoteApp与桌面连接。
2. 按照向导输入URL地址，外网输入"tx2.cec.cc:8000"，内网输入"tx.cec.cc"，；
3. 最后就可在开始程序菜单直接访问远程应用和桌面。


## IE浏览器
&emsp;&emsp;适用于具有IE浏览器的windows系统。  
&emsp;&emsp;Windows终端可以通过IE浏览器访问，实际是系统自带了“远程桌面连接”APP客户端工具，通过浏览器调用工具打开远程应用或桌面。  
&emsp;&emsp;注意：WinXP和Win7在非局域网环境下并不支持IE浏览器方式访问，请参照H5浏览器。

1. 打开IE浏览器，地址栏输入https://tx.cec.cc ，<!--后端会自动识别转向H4站点，即https://tx.cec.cc/rdweb/pages/ ，-->输入用户名和密码进行登录；
2. 首次登录会提示保存密码，点击“是”，方便下次登陆；
3. 首次登录还会提示是否运行加载项，点击“允许”，可以实现更佳访问云应用和云桌面体验；
4. 非同域中电脑首次打开会提示信任发布者提示，勾选“不再询问我是否从此发布者进行远程连接”，可获得更佳的单点访问体验。

## 特殊程序
&emsp;&emsp;一般适用于非桌面系统或者定制thinos。普通用户一般无需关注。
