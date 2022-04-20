# Objects
* [`Minimal Model Input`](#reference-minimalmodelinput)
* [`Minimal Model Output`](#reference-minimalmodeloutput) (root object)
* [`Model Description`](#reference-modeldescription)


---------------------------------------
<a name="reference-minimalmodelinput"></a>
## Minimal Model Input

**`Minimal Model Input` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**dt**|`number`|an optional time interval at which to compute the states.|No|
|**p**|`number` `[]`|a vector of model parameters| &#10003; Yes|
|**tspan**|`number` `[]`|a timespan over which to simulate the model| &#10003; Yes|
|**u0**|`number` `[]`|a vector of initial conditions| &#10003; Yes|

Additional properties are not allowed.

### MinimalModelInput.dt

an optional time interval at which to compute the states.

* **Type**: `number`
* **Required**: No

### MinimalModelInput.p

a vector of model parameters

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MinimalModelInput.tspan

a timespan over which to simulate the model

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MinimalModelInput.u0

a vector of initial conditions

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes




---------------------------------------
<a name="reference-minimalmodeloutput"></a>
## Minimal Model Output

**`Minimal Model Output` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**metadata**|`MinimalModelInput`|| &#10003; Yes|
|**model**|`ModelDescription`|| &#10003; Yes|
|**outputs**|`number` `[]`|an optional vector of outputs|No|
|**t**|`number` `[]`|a vector of times at which the model is run| &#10003; Yes|
|**u**|`array` `[]`|a matrix of states| &#10003; Yes|

Additional properties are not allowed.

### MinimalModelOutput.metadata

* **Type**: `MinimalModelInput`
* **Required**:  &#10003; Yes

### MinimalModelOutput.model

* **Type**: `ModelDescription`
* **Required**:  &#10003; Yes

### MinimalModelOutput.outputs

an optional vector of outputs

* **Type**: `number` `[]`
* **Required**: No

### MinimalModelOutput.t

a vector of times at which the model is run

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MinimalModelOutput.u

a matrix of states

* **Type**: `array` `[]`
* **Required**:  &#10003; Yes




---------------------------------------
<a name="reference-modeldescription"></a>
## Model Description

**`Model Description` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**connectorVersion**|`string`|A version number identifying the version of the connector used in this run.
This may be the same as modelVersion if development of the two is closely-linked.| &#10003; Yes|
|**modelVersion**|`string`|A version number identifying the version of the model used in this run.| &#10003; Yes|
|**name**|`string`|A short display name to identify the model| &#10003; Yes|

Additional properties are not allowed.

### ModelDescription.connectorVersion

A version number identifying the version of the connector used in this run.
This may be the same as modelVersion if development of the two is closely-linked.

* **Type**: `string`
* **Required**:  &#10003; Yes

### ModelDescription.modelVersion

A version number identifying the version of the model used in this run.

* **Type**: `string`
* **Required**:  &#10003; Yes

### ModelDescription.name

A short display name to identify the model

* **Type**: `string`
* **Required**:  &#10003; Yes




---------------------------------------
<a name="reference-"></a>
## 

