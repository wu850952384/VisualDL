[**中文**](./README_CN.md)


<p align="center">
  <img src="https://raw.githubusercontent.com/PaddlePaddle/VisualDL/develop/frontend/packages/core/public/images/logo-visualdl.svg?sanitize=true" width="70%"/>
</p>



<p align="center">
<a href="https://actions-badge.atrox.dev/PaddlePaddle/VisualDL/goto?ref=develop"><img alt="Build Status" src="https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FPaddlePaddle%2FVisualDL%2Fbadge%3Fref%3Ddevelop&style=flat-square" alt="Build Status" /></a>
<a href="https://pypi.org/project/visualdl/"><img src="https://img.shields.io/pypi/v/visualdl?style=flat-square" alt="PyPI" /></a>
<a href="https://pypi.org/project/visualdl/#files"><img src="https://img.shields.io/pypi/dm/visualdl?style=flat-square" alt="Downloads" /></a>
<a href="https://github.com/PaddlePaddle/VisualDL/blob/develop/LICENSE"><img src="https://img.shields.io/github/license/paddlepaddle/visualdl?style=flat-square" alt="License" /></a>
</p>


<p align="center">
<a href="javascript:void(0)"><img src="https://img.shields.io/badge/QQ_Group-1045783368-52B6EF?style=social&logo=tencent-qq&logoColor=000&logoWidth=20" alt="QQ Group" /></a>
</p>


## Introduction

VisualDL, a visualization analysis tool of PaddlePaddle, provides a variety of charts to show the trends of parameters, and visualizes model structures, data samples, histograms of tensors, PR curves , ROC curves and high-dimensional data distributions. It enables users to understand the training process and the model structure more clearly and intuitively so as to optimize models efficiently.

VisualDL provides various visualization functions, including **tracking metrics in real-time, visualizing the model structure, displaying the data sample, visualizing the relationship between hyperparameters and model metrics, presenting the changes of distributions of tensors, showing the pr curves, projecting high-dimensional data to a lower dimensional space and more.** Additionally, VisualDL provides VDL.service, which enables developers easily to save, track and share visualization results of experiments. For specific guidelines of each function, please refer to  [**VisualDL User Guide**](./docs/components/README.md). For up-to-date experience, please feel free to try our [**Online Demo**](https://www.paddlepaddle.org.cn/paddle/visualdl/demo). Currently, VisualDL iterates rapidly and new functions will be continuously added.

Browsers supported by VisualDL are:

- Google Chrome ≥ 79
- Firefox ≥ 67
- Microsoft Edge ≥ 79
- Safari ≥ 11.1

VisualDL natively supports the use of Python. Developers can retrieve plentiful visualization results by simply adding a few lines of Python code into the model before training.



## Recent Activities

- 🔔**2021.5.26**

  **"VisualDL--Quickly get a perfect model by using the visualization analysis tool "**

  💙 **Time: Wednesday (5.26) 19:00 at [PaddlePaddle's bilibili Live broadcast](http://live.bilibili.com/21689802)** 💙

  📣**Preview**

  - Analysis of Key Problems in Creating Deep Learning models
  - Tips of Parameter Optimization by VisualDL
  - Tricks of Training a Classification Model with Good Performance

<p align="center">
  <img src="https://user-images.githubusercontent.com/48054808/119295192-c87ad780-bc88-11eb-86b2-d67765486530.jpg" width="30%"/>
</p>

## Contents

* [Key Highlights](#Key-Highlights)
* [Installation](#Installation)
* [Usage Guideline](#Usage-Guideline)
* [Function Preview](#Function-Preview)
* [Frequently Asked Questions](#Frequently-Asked-Questions)
* [Contribution](#Contribution)
* [More Details](#More-Details)
* [Technical Communication](#Technical-Communication)



## Key Highlights

### Easy to Use

The high-level design of API makes it easy to use. Only one click can initiate the visualization of model structures.


### Various Functions

The function contains the visualization of training parameters, data samples, graph structures, histograms of tensors, PR curves and high-dimensional data distributions.

### High Compatibility

VisualDL provides the visualization of the mainstream model structures such as Paddle, ONNX, Caffe, widely supporting visual analysis for diverse users.

### Fully Support

By Integrating into PaddlePaddle and related modules, VisualDL allows developers to use different components without obstructions, and thus to have the best experience in the PaddlePaddle ecosystem.

## Installation


### Install by PiP

```shell
python -m pip install visualdl -i https://mirror.baidu.com/pypi/simple
```

### Install by Code

```
git clone https://github.com/PaddlePaddle/VisualDL.git
cd VisualDL

python setup.py bdist_wheel
pip install --upgrade dist/visualdl-*.whl
```

Please note that Python 2 is no longer maintained officially since January 1, 2020. VisualDL now only supports Python 3 in order to ensure the usability of codes.


## Usage Guideline

VisualDL stores the data, parameters and other information of the training process in a log file. Users can launch the panel to observe the visualization results.

### 1. Log

The Python SDK is provided at the back end of VisualDL, and a logger can be customized through LogWriter. The interface description is shown as follows:

```python
class LogWriter(logdir=None,
                max_queue=10,
                flush_secs=120,
                filename_suffix='',
                **kwargs)
```

#### Interface Parameters

| parameters      | type    | meaning                                                      |
| --------------- | ------- | ------------------------------------------------------------ |
| logdir          | string  | The path location of log file. VisualDL will create a log file under this path to record information generated by the training process. If not specified, the path will be  `runs/${CURRENT_TIME}`as default. |
| max_queue       | int     | The maximum capacity of the data generated before recording in a log file. Default value is 10. If the capacity is reached, the data are immediately written into the log file. |
| flush_secs      | int     | The maximum cache time of the data generated before recording in a log file. Default value is 120. When this time is reached, the data are immediately written to the log file. (When the log message queue reaches the maximum cache time or maximum capacity, it will be written to the log file immediately)|
| filename_suffix | string  | Add a suffix to the default log file name.                   |
| display_name    | string  | This parameter is displayed in the location of `Select Data Stream` in the panel. If not set, the default name is `logdir`.(When `logdir` is too long or needed to be hidden). |
| file_name    | string  | Set the name of the log file. If the file_name already exists, setting the file_name will be new records in the same log file, which will continue to be used. Note that the name should include 'vdlrecords'. |
<p align="center">
  <img src="https://user-images.githubusercontent.com/48054808/103187556-b9714280-48ff-11eb-9052-008e02a21199.png" width="100%"/>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/48054808/103187552-b4ac8e80-48ff-11eb-998a-57d5a1bc7ee6.png" width="100%"/>
</p>


#### Example

Create a log file and record scalar values:

```python
from visualdl import LogWriter

# create a log file under `./log/scalar_test/train`
with LogWriter(logdir="./log/scalar_test/train") as writer:
    # use `add_scalar` to record scalar values
    writer.add_scalar(tag="acc", step=1, value=0.5678)
    writer.add_scalar(tag="acc", step=2, value=0.6878)
    writer.add_scalar(tag="acc", step=3, value=0.9878)
```

### 2. Launch Panel

In the above example, the log has recorded three sets of scalar values. Developers can view the visualization results of the log file through launching the visualDL panel. There are two ways to launch the log file:

#### Launch by Command Line

Use the command line to launch the VisualDL panel：

```python
visualdl --logdir <dir_1, dir_2, ... , dir_n> --model <model_file> --host <host> --port <port> --cache-timeout <cache_timeout> --language <language> --public-path <public_path> --api-only
```

Parameter details:

| parameters      | meaning                                                      |
| --------------- | ------------------------------------------------------------ |
| --logdir        | Set one or more directories of the log. All the logs in the paths or subdirectories will be displayed on the VisualDL Board indepentently. |
| --model         | Set a path to the model file (not a directory). VisualDL will visualize the model file in Graph page. PaddlePaddle、ONNX、Keras、Core ML、Caffe and other model formats are supported. Please refer to [Graph - Functional Instructions](./docs/components/README.md#functional-instructions-2). |
| --host          | Specify IP address. The default value is `127.0.0.1`. Specify it as `0.0.0.0` or public IP address so that other machines can visit VisualDL Board.       |
| --port          | Set the port. The default value is `8040`.                   |
| --cache-timeout | Cache time of the backend. During the cache time, the front end requests the same URL multiple times, and then the returned data are obtained from the cache. The default cache time is 20 seconds. |
| --language      | The language of the VisualDL panel. Language can be specified as 'en' or 'zh', and the default is the language used by the browser. |
| --public-path   | The URL path of the VisualDL panel. The default path is '/app', meaning that the access address is 'http://&lt;host&gt;:&lt;port&gt;/app'. |
| --api-only      | Decide whether or not to provide only API. If this parameter is set, VisualDL will only provides API service without displaying the web page, and the API address is 'http://&lt;host&gt;:&lt;port&gt;/&lt;public_path&gt;/api'. Additionally, If the public_path parameter is not specified, the default address is 'http://&lt;host&gt;:&lt;port&gt;/api'. |

To visualize the log file generated in the previous step, developers can launch the panel through the command:

```
visualdl --logdir ./log
```

#### Launch in Python Script


Developers can start the VisualDL panel in Python script as follows:

```python
visualdl.server.app.run(logdir,
                        model="path/to/model",
                        host="127.0.0.1",
                        port=8080,
                        cache_timeout=20,
                        language=None,
                        public_path=None,
                        api_only=False,
                        open_browser=False)
```

Please note: since all parameters are indefinite except `logdir`, developers should specify parameter names when using them.

The interface parameters are as follows:

| parameters    | type                                               | meaning                                                      |
| ------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| logdir        | string or list[string_1, string_2, ... , string_n] | Set one or more directories of the log. All the logs in the paths or subdirectories will be displayed on the VisualDL Board indepentently.|
| model         | string                                             | Set a path to the model file (not a directory). VisualDL will visualize the model file in Graph page. |
| host          | string                                             | Specify IP address. The default value is `127.0.0.1`. Specify it as `0.0.0.0` or public IP address so that other machines can visit VisualDL Board.       |
| port          | int                                                | Set the port. The default value is `8040`.                   |
| cache_timeout | int                                                | Cache time of the backend. During the cache time, the front end requests the same URL multiple times, and then the returned data are obtained from the cache. The default cache time is 20 seconds. |
| language      | string                                             | The language of the VisualDL panel. Language can be specified as 'en' or 'zh', and the default is the language used by the browser. |
| public_path   | string                                             | The URL path of the VisualDL panel. The default path is '/app', meaning that the access address is 'http://&lt;host&gt;:&lt;port&gt;/app'. |
| api_only      | boolean                                            | Decide whether or not to provide only API. If this parameter is set, VisualDL will only provides API service without displaying the web page, and the API address is 'http://&lt;host&gt;:&lt;port&gt;/&lt;public_path&gt;/api'. Additionally, If the parameter public_path is not specified, the default address is 'http://&lt;host&gt;:&lt;port&gt;/api'. |
| open_browser  | boolean                                            | Whether or not to open the browser. If this parameter is set as True, the browser will be opened automatically and VisualDL panel will be launched at the same time. If parameter api_only is specified as True,  parameter open_browser can be ignored. |

To visualize the log file generated in the previous step, developers can launch the panel through the command:

```python
from visualdl.server import app

app.run(logdir="./log")
```

After launching the panel by one of the above methods, developers can see the visualization results on the browser shown as blow:

<p align="center">
  <img src="https://user-images.githubusercontent.com/48054808/90868674-ba321f00-e3c9-11ea-83c1-f03c6dd19187.png" width="70%"/>
</p>

### 3. Read data in log files using LogReader

VisualDL also provides `LogReader` interface to read any data from log files.

```python
class LogReader(file_path='')
```
#### Interface Parameters
| parameters | type   | meaning                              |
| ---------- | ------ | ------------------------------------ |
| file_path  | string | File path of the log file. Required. |
#### Example
If there is a log file named `vdlrecords.1605533348.log` in the directory of `./log`, we can retrieve the data under the 'loss' tag in the scalar by:
```python
from visualdl import LogReader
reader = LogReader(file_path='./vdlrecords.1605533348.log')
data = reader.get_data('scalar', 'loss')
print(data)
```
The result will be a list shown as below：
```python
...
id: 5
tag: "Metrics/Training(Step): loss"
timestamp: 1605533356039
value: 3.1297709941864014
...
```

For more information of `LogReader`, please refer to [LogReader](./docs/io/LogReader.md).


## Function Preview

### Scalar

**Scalar** makes use of various charts to display how the parameters, such as accuracy, loss and learning rate, changes during the training process. In this case, developers can observe not only the single but also the multiple groups of parameters in order to understand the training process and thus speed up the process of model tuning.

#### Dynamic Display

After the launch of VisualDL Board, the LogReader will continuously record the data to display in the front-end. Hence, the changes of parameters can be visualized in real-time, as shown below:

<p align="center">
  <img src="https://visualdl.bj.bcebos.com/images/dynamic_display.gif" width="60%"/>
</p>



#### Comparison of Multiple Experiments

Developers can compare multiple experiments by specifying and uploading the path of each experiment at the same time so as to visualize the same parameters in the same chart.

<p align="center">
  <img src="https://user-images.githubusercontent.com/48054808/90869567-fdd95880-e3ca-11ea-9855-6c97ad5c8ae7.gif" width="100%"/>
</p>



### Image

**Image** provides real-time visualizations of the image data during the training process, allowing developers to observe the changes of images at different training stages and  to deeply understand the effects of the training process.

<p align="center">
<img src="https://user-images.githubusercontent.com/48054808/90869677-22353500-e3cb-11ea-9830-2334bdd8e52e.gif" width="55%"/>
</p>


### Audio

**Audio** aims to allow developers to listen to the audio data in real-time during the training process, helping developers to monitor the process of speech recognition and text-to-speech.

<p align="center">
<img src="https://user-images.githubusercontent.com/48054808/90869771-47c23e80-e3cb-11ea-8b2a-a38b6c33d64b.png" width="85%"/>
</p>


### Text
**Text** visualizes the text output of NLP models within any stage, aiding developers to compare the changes of outputs so as to deeply understand the training process and simply evaluate the performance of the model.

<p align="center">
<img src="https://user-images.githubusercontent.com/28444161/106248340-cdd09400-624b-11eb-8ea9-5a07a239c365.png" width="85%"/>
</p>


### Graph

**Graph** enables developers to visualize model structures by only one click. Moreover, **Graph** allows developers to explore model attributes, node information, node input and output. aiding them analyze model structures quickly and understand the direction of data flow easily.

<p align="center">
<img src="https://user-images.githubusercontent.com/48054808/90869866-6aecee00-e3cb-11ea-8211-b8af070239e6.png" width="85%"/>
</p>


### Histogram

**Histogram** displays how the trend of tensor (weight, bias, gradient, etc.) changes during the training process in the form of histogram. Developers can adjust the model structures accurately by having an in-depth understanding of the effect of each layer.

- Offset Mode

<p align="center">
<img src="https://user-images.githubusercontent.com/48054808/90870121-bd2e0f00-e3cb-11ea-89cf-6622cb607b89.png" width="85%"/>
</p>



- Overlay Mode

<p align="center">
<img src="https://user-images.githubusercontent.com/48054808/90870194-cfa84880-e3cb-11ea-8a66-bebcad267a10.png" width="85%"/>
</p>

### PR Curve

**PR Curve** displays the precision and recall values under different thresholds, helping developers to find the best threshold efficiently.

<p align="center">
<img src="https://user-images.githubusercontent.com/48054808/103274647-1ef72900-49fd-11eb-9284-2a5b63bdf2e3.png" width="85%"/>
</p>

### ROC Curve

**ROC Curve** shows the performance of a classification model at all classification thresholds; the larger the area under the curve, the better the model performs, aiding developers in evaluating the model performance and choosing an appropriate threshold.

<p align="center">
<img src="https://user-images.githubusercontent.com/48054808/103344081-8928d000-4ac8-11eb-84d0-28f249886172.gif" width="85%"/>
</p>


### High Dimensional

**High Dimensional** provides three approaches--T-SNE, PCA and UMAP--to do the dimensionality reduction, allowing developers to have an in-depth analysis of the relationship between high-dimensional data and to optimize algorithms based on the analysis.

<p align="center">
<img src="https://user-images.githubusercontent.com/48054808/103188111-1b32ac00-4902-11eb-914e-c2368bdb8373.gif" width="85%"/>
</p>


### Hyper Parameters

**Hyper Parameters** visualize the relationship between hyperparameters and model metrics (such as accuracy and loss) in a rich view, helping you identify the best hyperparameters in an efficient way.

<p align="center">
<img src="https://user-images.githubusercontent.com/28444161/119247155-e9c0c280-bbb9-11eb-8175-58a9c7657a9c.gif" width="85%"/>
</p>


### VDL.service

**VDL.service** enables developers to easily save, track and share visualization results with anyone for free.

<p align="center">
<img src=https://user-images.githubusercontent.com/48054808/93731055-fbeafb00-fbfd-11ea-80f4-bbfd08a0fc35.png width="85%"/>
</p>


## Frequently Asked Questions

If you are confronted with some problems when using VisualDL, please refer to [our FAQs](./docs/faq.md).

## Contribution

VisualDL, in which Graph is powered by [Netron](https://github.com/lutzroeder/netron), is an open source project supported by [PaddlePaddle](https://www.paddlepaddle.org/) and [ECharts](https://echarts.apache.org/).

Developers are warmly welcomed to use, comment and contribute.

## More Details

For more details related to the use of VisualDL, please refer to [**VisualDL User Guide**](./docs/components/README.md)。

## Technical Communication

Welcome to join the official QQ group 1045783368 to communicate with PaddlePaddle team and other developers.

<p align="center">
<img src="https://user-images.githubusercontent.com/48054808/82522691-c2758680-9b5c-11ea-9aee-fca994aba175.png" width="20%"/>
</p>

