> WETZEL_WARNING: Unrecognized JSON Schema.

# Objects
* [`Common Model Input`](#reference-commonmodelinput) (root object)
* [`Intensity`](#reference-intensity)
* [`ISO Date`](#reference-isodate)
* [`Model Parameters`](#reference-modelparameters)
    * [`Intervention Period`](#reference-interventionperiod)
* [`Region`](#reference-region)
* [`Subregion`](#reference-subregion)


---------------------------------------
<a name="reference-commonmodelinput"></a>
## Common Model Input

A generalized description of the input to an epidemiological model.

**`Common Model Input` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**parameters**|`ModelParameters`|| &#10003; Yes|
|**region**|`Region`|| &#10003; Yes|
|**subregion**|`Subregion`||No|

Additional properties are not allowed.

### CommonModelInput.parameters

* **Type**: `ModelParameters`
* **Required**:  &#10003; Yes

### CommonModelInput.region

* **Type**: `Region`
* **Required**:  &#10003; Yes
* **Examples**:
    * `US`

### CommonModelInput.subregion

* **Type**: `Subregion`
* **Required**: No
* **Examples**:
    * `US-AK`




---------------------------------------
<a name="reference-intensity"></a>
## Intensity



---------------------------------------
<a name="reference-interventionperiod"></a>
## Intervention Period

**`Intervention Period` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**caseIsolation**|`Intensity`||No|
|**reductionPopulationContact**|`number`|The estimated reduction in population contact resulting from
all of the above interventions. Some models require this generalized
parameter instead of the individual interventions.| &#10003; Yes|
|**schoolClosure**|`Intensity`||No|
|**socialDistancing**|`Intensity`||No|
|**startDate**|`ISODate`|| &#10003; Yes|
|**voluntaryHomeQuarantine**|`Intensity`||No|

Additional properties are not allowed.

### InterventionPeriod.caseIsolation

* **Type**: `Intensity`
* **Required**: No
* **Allowed values**:
    * `aggressive`
    * `moderate`
    * `mild`

### InterventionPeriod.reductionPopulationContact

The estimated reduction in population contact resulting from
all of the above interventions. Some models require this generalized
parameter instead of the individual interventions.

* **Type**: `number`
* **Required**:  &#10003; Yes

### InterventionPeriod.schoolClosure

* **Type**: `Intensity`
* **Required**: No
* **Allowed values**:
    * `aggressive`
    * `moderate`
    * `mild`

### InterventionPeriod.socialDistancing

* **Type**: `Intensity`
* **Required**: No
* **Allowed values**:
    * `aggressive`
    * `moderate`
    * `mild`

### InterventionPeriod.startDate

* **Type**: `ISODate`
* **Required**:  &#10003; Yes
* **Format**: date
* **Examples**:
    * `2020-03-06`

### InterventionPeriod.voluntaryHomeQuarantine

* **Type**: `Intensity`
* **Required**: No
* **Allowed values**:
    * `aggressive`
    * `moderate`
    * `mild`




---------------------------------------
<a name="reference-isodate"></a>
## ISO Date



---------------------------------------
<a name="reference-modelparameters"></a>
## Model Parameters

**`Model Parameters` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**calibrationCaseCount**|`number`|The total number of confirmed cases in the region before the calibration date.| &#10003; Yes|
|**calibrationDate**|`ISODate`|| &#10003; Yes|
|**calibrationDeathCount**|`number`|The total number of deaths in the region before the calibration date.| &#10003; Yes|
|**interventionPeriods**|`InterventionPeriod` `[]`|A list of time periods, each with a different set of interventions.| &#10003; Yes|
|**r0**|`["number", "null"]`|The assumed reproduction number for the virus. If this is null, then each
model will use its own default value.| &#10003; Yes|

Additional properties are not allowed.

### ModelParameters.calibrationCaseCount

The total number of confirmed cases in the region before the calibration date.

* **Type**: `number`
* **Required**:  &#10003; Yes

### ModelParameters.calibrationDate

* **Type**: `ISODate`
* **Required**:  &#10003; Yes
* **Format**: date
* **Examples**:
    * `2020-03-06`

### ModelParameters.calibrationDeathCount

The total number of deaths in the region before the calibration date.

* **Type**: `number`
* **Required**:  &#10003; Yes

### ModelParameters.interventionPeriods

A list of time periods, each with a different set of interventions.

* **Type**: `InterventionPeriod` `[]`
* **Required**:  &#10003; Yes

### ModelParameters.r0

The assumed reproduction number for the virus. If this is null, then each
model will use its own default value.

* **Type**: `["number", "null"]`
* **Required**:  &#10003; Yes




---------------------------------------
<a name="reference-region"></a>
## Region



---------------------------------------
<a name="reference-subregion"></a>
## Subregion



---------------------------------------
<a name="reference-wetzel_warning:-title-not-defined"></a>
## WETZEL_WARNING: title not defined

