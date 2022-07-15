# Objects
* [`Minimal Model Input`](#reference-minimalmodelinput)
* [`Minimal Model Input Batch`](#reference-minimalmodelinputbatch) (root object)


---------------------------------------
<a name="reference-minimalmodelinput"></a>
## Minimal Model Input

**`Minimal Model Input` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**dt**|`number`|Optional time interval at which to compute the states.|No|
|**p**|`number` `[]`|Vector of model parameters| &#10003; Yes|
|**tspan**|`number` `[]`|Timespan over which to simulate the model| &#10003; Yes|
|**u0**|`number` `[]`|Vector of initial conditions| &#10003; Yes|

Additional properties are not allowed.

### MinimalModelInput.dt

Optional time interval at which to compute the states.

* **Type**: `number`
* **Required**: No

### MinimalModelInput.p

Vector of model parameters

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MinimalModelInput.tspan

Timespan over which to simulate the model

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MinimalModelInput.u0

Vector of initial conditions

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes




---------------------------------------
<a name="reference-minimalmodelinputbatch"></a>
## Minimal Model Input Batch



---------------------------------------
<a name="reference-"></a>
## 

