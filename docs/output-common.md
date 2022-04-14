# Objects
* [`Common Model Input`](#reference-commonmodelinput)
    * [`Model Parameters`](#reference-modelparameters)
        * [`Intervention Period`](#reference-interventionperiod)
    * [`Region`](#reference-region)
    * [`Subregion`](#reference-subregion)
* [`Common Model Output`](#reference-commonmodeloutput) (root object)
* [`Intensity`](#reference-intensity)
* [`ISO Date`](#reference-isodate)
* [`Model Description`](#reference-modeldescription)
* [`Severity Metrics`](#reference-severitymetrics)


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
<a name="reference-commonmodeloutput"></a>
## Common Model Output

**`Common Model Output` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**aggregate**|`object`|| &#10003; Yes|
|**metadata**|`CommonModelInput`|A generalized description of the input to an epidemiological model.| &#10003; Yes|
|**model**|`ModelDescription`|| &#10003; Yes|
|**time**|`object`|| &#10003; Yes|

Additional properties are not allowed.

### CommonModelOutput.aggregate

* **Type**: `object`
* **Required**:  &#10003; Yes

### CommonModelOutput.metadata

A generalized description of the input to an epidemiological model.

* **Type**: `CommonModelInput`
* **Required**:  &#10003; Yes

### CommonModelOutput.model

* **Type**: `ModelDescription`
* **Required**:  &#10003; Yes

### CommonModelOutput.time

* **Type**: `object`
* **Required**:  &#10003; Yes




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
<a name="reference-severitymetrics"></a>
## Severity Metrics

**`Severity Metrics` Properties**

|   |Type|Description|Required|
|---|---|---|---|
|**CritRecov**|`number` `[]`|Current number of critical cases on this day who are well enough to leave the ICU but still need a hospital bed| &#10003; Yes|
|**Critical**|`number` `[]`|Current number of critical cases on this day (assume represents ICU demand)| &#10003; Yes|
|**ILI**|`number` `[]`|Current number of influenza-like illness cases on this day (assume represents GP demand)| &#10003; Yes|
|**Mild**|`number` `[]`|Current number of mild cases on this day| &#10003; Yes|
|**R**|`number` `[]`|R-number on this day|No|
|**SARI**|`number` `[]`|Current number of Severe Acute Respiratory Illness cases on this day (assume represents hospital demand)| &#10003; Yes|
|**cumCritRecov**|`number` `[]`|Total number of patients recovered from critical cases since the beginning of the epidemic| &#10003; Yes|
|**cumCritical**|`number` `[]`|Total number of critical cases since the beginning of the epidemic| &#10003; Yes|
|**cumILI**|`number` `[]`|Total number of influenza-like illnesses since the beginning of the epidemic| &#10003; Yes|
|**cumMild**|`number` `[]`|Total number of mild cases since the beginning of the epidemic| &#10003; Yes|
|**cumSARI**|`number` `[]`|Total number of severe acute respiratory illnesses since the beginning of the epidemic| &#10003; Yes|
|**incDeath**|`number` `[]`|Number of deaths occurring on this day| &#10003; Yes|

Additional properties are not allowed.

### SeverityMetrics.CritRecov

Current number of critical cases on this day who are well enough to leave the ICU but still need a hospital bed

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.Critical

Current number of critical cases on this day (assume represents ICU demand)

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.ILI

Current number of influenza-like illness cases on this day (assume represents GP demand)

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.Mild

Current number of mild cases on this day

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.R

R-number on this day

* **Type**: `number` `[]`
* **Required**: No

### SeverityMetrics.SARI

Current number of Severe Acute Respiratory Illness cases on this day (assume represents hospital demand)

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.cumCritRecov

Total number of patients recovered from critical cases since the beginning of the epidemic

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.cumCritical

Total number of critical cases since the beginning of the epidemic

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.cumILI

Total number of influenza-like illnesses since the beginning of the epidemic

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.cumMild

Total number of mild cases since the beginning of the epidemic

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.cumSARI

Total number of severe acute respiratory illnesses since the beginning of the epidemic

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes

### SeverityMetrics.incDeath

Number of deaths occurring on this day

* **Type**: `number` `[]`
* **Required**:  &#10003; Yes




---------------------------------------
<a name="reference-subregion"></a>
## Subregion



---------------------------------------
<a name="reference-"></a>
## 

