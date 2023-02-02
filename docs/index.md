# 快速开始
&emsp;&emsp;工一云电脑是一种基于私有云和混合云的一种服务，需要通过某种可视化终端设备进行连接访问。

&emsp;&emsp;支持各种电脑、平板、手机、智能电视、单片机、零瘦客户机等终端设备，同时支持Windows、Andriod、iOS、iPadOS、macOS，ChromeOS、HarmonyOS、WinPhoneOS、RaspBerryOS、ThinOS、Linux Desktop、Linux Server几乎所有的主流操作系统。连接的方式也包含APP、浏览器、订阅、IE浏览器、定制程序等多种连接方式。


### 使用方法
1. 根据下表查找对应设备、系统的推荐连接方式；
2. 选择其中一种推荐连接方式，具体步骤参考下面对应的连接方式；

### 推荐连接方式
&emsp;&emsp;最常用的连接方式是APP和浏览器，支持APP的首先推荐APP进行连接，其次是浏览器；临时性一次性使用推荐使用浏览器；具体推荐的连接方式如下：

<div align="center">各设备推荐的连接方式表</div>

|操作系统       |台式/一体机/笔记本/微型电脑/虚拟机|平板      |手机|智能电视|单片机  |零瘦客户端|
|---------------|--------------------------------|----------|----|-------|-------|---------|
|Windows        |APP, 浏览器, 订阅, IE浏览器       |同左      |   |       |          |       |
|Andriod        |                                |APP, 浏览器|APP|APP    |        |       |
|iOS            |                                |          |APP|        |        |       |
|iPadOS         |                                |APP, 浏览器|   |       |        |       |
|macOS          |APP, 浏览器                      |          |   |       |        |       |
|ChromeOS       |                                |APP, 浏览器|APP|        |        |       |
|HarmonyOS      |                                |APP, 浏览器|APP|        |        |       |
|WinPhoneOS     |                                |          |APP|         |        |       |
|RaspBerryOS    |                                |          |   |         |定制程序|       |
|ThinOS         |                                |           |  |         |       |定制程序|
|Linux Desktop  |浏览器                          |浏览器     |   |         |       |       |
|Linux Server   |定制程序                        |           |  |         |定制程序|定制程序|

<!-- * Windows+台式/笔记本/微型电脑：浏览器、IE浏览器、订阅
* Andriod/HarmonyOS/iOS+手机：APP客户端
* Andriod/HarmonyOS/iPadOS/macOS/ChromeOS+平板/一体机/笔记本：APP客户端、浏览器
* Linux Desktop(RaspBerryOS, Ubuntu, Debian, Centos, Redhat...)+单片机/虚拟机/台式/笔记本/微型电脑：浏览器
* Linux Server(RaspBerryOS, Ubuntu, Debian, Centos, Redhat...)+单片机/虚拟机/台式/笔记本/微型电脑：定制程序
* ThinOS(Dell, HP...)+瘦客户端：定制程序 -->

## 连接方式1: APP
&emsp;&emsp;适合支持安装APP客户端的系统。  
&emsp;&emsp;不同终端系统的APP客户端不同，但操作大同小异，本示例以Andriod手机为例。首先根据系统点击以下对应的链接进行下载安装；
1. [下载APP](/download)，安装APP后打开应用，点击右上角的加号，选择“添加工作区”，外网输入`tx2.cec.cc:8000`，内网输入`tx.cec.cc`，用户账户点击下拉选择“添加用户账户”，输入个人账号`demo@cec.cc`和个人密码并点击保存；
2. 然后点击右上角的“下一步”，等待加载一两秒钟，点击“工作区”，此时会显示所有的应用程序和桌面资源；
3. 点击桌面或应用会弹出一个连接选项框，点击“连接”；
4. 进入桌面或应用后，顶部会出现一个鼠标键盘选项，移动端的鼠标操作分触屏模式和鼠标模式，根据习惯选择对应的模式即可。

## 连接方式2: 浏览器
&emsp;&emsp;适用于所有安装有H5浏览器的桌面系统。  
&emsp;&emsp;目前主流的浏览器都支持Html5：360、Edge、Opera、Chrome、Safari、Firefox浏览器等。
1. H5浏览器只需输入`https://tx.cec.cc` ，<!-- ，后端会自动识别转向H5站点，即https://tx.cec.cc/rdweb/webclient ； -->输入用户名和密码进行登录；
2. 登陆到资源页面可就以访问远程应用和桌面了，部分应用不能支持，可以采用登陆桌面方式进行访问；如果要输入中文，需要点击右上角“设置”按钮，注意切换语言略有不同（单键Shift）；
3. 点击进入远程应用或桌面，图为H5浏览器的嵌入式访问效果。

## 连接方式3: 订阅
&emsp;&emsp;仅适用于windows桌面系统。  
1. 控制面板打开RemoteApp与桌面连接。
2. 按照向导输入URL地址，外网输入`https://tx2.cec.cc:8000`，内网输入`https://tx.cec.cc`，；
3. 最后就可在开始程序菜单直接访问远程应用和桌面。


## 连接方式4: IE浏览器
&emsp;&emsp;适用于具有IE浏览器的windows系统。  
&emsp;&emsp;Windows终端可以通过IE浏览器连接，实际是系统自带了“远程桌面连接”APP客户端工具，通过浏览器调用工具打开远程应用或桌面。  
&emsp;&emsp;注意：WinXP和Win7在非局域网环境下并不支持IE浏览器方式连接，请参照H5浏览器。

1. 打开IE浏览器，地址栏输入`https://tx.cec.cc`，<!--后端会自动识别转向H4站点，即https://tx.cec.cc/rdweb/pages/ ，-->输入用户名和密码进行登录；
2. 首次登录会提示保存密码，点击“是”，方便下次登陆；
3. 首次登录还会提示是否运行加载项，点击“允许”，可以实现更佳访问云应用和云桌面体验；
4. 非同域中电脑首次打开会提示信任发布者提示，勾选“不再询问我是否从此发布者进行远程连接”，可获得更佳的单点访问体验。

## 连接方式5: 定制程序
&emsp;&emsp;一般适用于非桌面系统或者定制thinos。普通用户一般无需关注。


