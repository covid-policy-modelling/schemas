# Objects
* [`Batch input for running MicroMoB with Beverton-Holt aquatic mosquito model and 
Ross-Macdonald adult mosquito model over multiple sets of parameters.`](#reference-micromobbhrminputbatch) (root object)
* [`Input for MicroMoB model with Beverton-Holt aquatic mosquito model and
Ross-Macdonald adult mosquito model.`](#reference-micromobbhrminput)


---------------------------------------
<a name="reference-micromobbhrminputbatch"></a>
## Batch input for running MicroMoB with Beverton-Holt aquatic mosquito model and 
Ross-Macdonald adult mosquito model over multiple sets of parameters.

**`Batch input for running MicroMoB with Beverton-Holt aquatic mosquito model and 
Ross-Macdonald adult mosquito model over multiple sets of parameters.` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**input**|`object`|| &#10003; Yes|

Additional properties are not allowed.

### MicroMoBBHRMInputBatch.input

* **Type**: `object`
* **Required**:  &#10003; Yes
* **Allowed values**:




---------------------------------------
<a name="reference-micromobbhrminput"></a>
## Input for MicroMoB model with Beverton-Holt aquatic mosquito model and
Ross-Macdonald adult mosquito model.

**`Input for MicroMoB model with Beverton-Holt aquatic mosquito model and
Ross-Macdonald adult mosquito model.` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**adult_M**|`number` `[]`|total mosquito density per patch (length should equal number of patches)| &#10003; Yes|
|**adult_Y**|`number` `[]`|infected mosquito density per patch (length should equal number of patches)| &#10003; Yes|
|**adult_Z**|`number` `[]`|infectious mosquito density per patch (length should equal number of patches)| &#10003; Yes|
|**adult_eip**|`number` `[]`|the extrinsic incubation period (can be either length 1, 365, or equal to
tmax)| &#10003; Yes|
|**adult_f**|`number` `[]`|Blood feeding rate| &#10003; Yes|
|**adult_nu**|`number` `[]`|number of eggs laid per oviposition| &#10003; Yes|
|**adult_p**|`array` `[]`|Adult daily survival probability
(rows correspond to patches and columns to days)| &#10003; Yes|
|**adult_psi**|`array` `[]`|mosquito dispersal matrix (rows must sum to 1)| &#10003; Yes|
|**adult_q**|`number` `[]`|Human blood feeding fraction| &#10003; Yes|
|**adult_stochastic**|`boolean` `[]`|Update the adult mosquito model stochastically or deterministically?| &#10003; Yes|
|**aqua_K**|`array` `[]`|Carrying capacity
(rows correspond to patches and columns to days)| &#10003; Yes|
|**aqua_L**|`number` `[]`|Initial number of immature mosquitoes (length should equal number of
patches)| &#10003; Yes|
|**aqua_molt**|`array` `[]`|Proportion of immature stages which mature and emerge as adults each day
(rows correspond to patches and columns to days)| &#10003; Yes|
|**aqua_stochastic**|`boolean` `[]`|Update the aquatic mosquito model stochastically or deterministically?| &#10003; Yes|
|**aqua_surv**|`array` `[]`|Aquatic daily survival probability
(rows correspond to patches and columns to days)| &#10003; Yes|
|**p**|`number` `[]`|Number of patches| &#10003; Yes|
|**tmax**|`number` `[]`|Number of time steps| &#10003; Yes|

Additional properties are not allowed.

### MicroMoBBHRMInput.adult_M

total mosquito density per patch (length should equal number of patches)

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.adult_Y

infected mosquito density per patch (length should equal number of patches)

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.adult_Z

infectious mosquito density per patch (length should equal number of patches)

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.adult_eip

the extrinsic incubation period (can be either length 1, 365, or equal to
tmax)

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.adult_f

Blood feeding rate

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.adult_nu

number of eggs laid per oviposition

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.adult_p

Adult daily survival probability
(rows correspond to patches and columns to days)

* **Type**: `array` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.adult_psi

mosquito dispersal matrix (rows must sum to 1)

* **Type**: `array` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.adult_q

Human blood feeding fraction

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.adult_stochastic

Update the adult mosquito model stochastically or deterministically?

* **Type**: `boolean` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.aqua_K

Carrying capacity
(rows correspond to patches and columns to days)

* **Type**: `array` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.aqua_L

Initial number of immature mosquitoes (length should equal number of
patches)

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.aqua_molt

Proportion of immature stages which mature and emerge as adults each day
(rows correspond to patches and columns to days)

* **Type**: `array` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.aqua_stochastic

Update the aquatic mosquito model stochastically or deterministically?

* **Type**: `boolean` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.aqua_surv

Aquatic daily survival probability
(rows correspond to patches and columns to days)

* **Type**: `array` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.p

Number of patches

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### MicroMoBBHRMInput.tmax

Number of time steps

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes




---------------------------------------
<a name="reference-"></a>
## 

