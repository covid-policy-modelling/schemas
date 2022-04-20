# Objects
* [`Minimal Model Input`](#reference-minimalmodelinput) (root object)


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
<a name="reference-"></a>
## 

