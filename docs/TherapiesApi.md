# DicClient.TherapiesApi

All URIs are relative to *http://diabetesincontrol.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**diabetesTherapiesBloodGlucoseControlGet**](TherapiesApi.md#diabetesTherapiesBloodGlucoseControlGet) | **GET** /diabetes-therapies/blood-glucose-control/ | Blood Glucose Control
[**diabetesTherapiesDietNutritionGet**](TherapiesApi.md#diabetesTherapiesDietNutritionGet) | **GET** /diabetes-therapies/diet-nutrition/ | Diet &amp; Nutrition
[**diabetesTherapiesGet**](TherapiesApi.md#diabetesTherapiesGet) | **GET** /diabetes-therapies | List Posts
[**diabetesTherapiesGlp1Get**](TherapiesApi.md#diabetesTherapiesGlp1Get) | **GET** /diabetes-therapies/glp-1/ | GLP1 Agonist
[**diabetesTherapiesInsulinGet**](TherapiesApi.md#diabetesTherapiesInsulinGet) | **GET** /diabetes-therapies/insulin/ | Insulin
[**diabetesTherapiesMetforminGet**](TherapiesApi.md#diabetesTherapiesMetforminGet) | **GET** /diabetes-therapies/metformin/ | metformin
[**diabetesTherapiesSglt2Get**](TherapiesApi.md#diabetesTherapiesSglt2Get) | **GET** /diabetes-therapies/sglt-2/ | SGLT2
[**diabetesTherapiesSulfonylureaGet**](TherapiesApi.md#diabetesTherapiesSulfonylureaGet) | **GET** /diabetes-therapies/sulfonylurea/ | Sulfonylurea


<a name="diabetesTherapiesBloodGlucoseControlGet"></a>
# **diabetesTherapiesBloodGlucoseControlGet**
> Feed diabetesTherapiesBloodGlucoseControlGet(json)

Blood Glucose Control

Blood Glucose Control

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.TherapiesApi();

var json = 1.2; // Number | 1 menu

apiInstance.diabetesTherapiesBloodGlucoseControlGet(json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json** | **Number**| 1 menu | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="diabetesTherapiesDietNutritionGet"></a>
# **diabetesTherapiesDietNutritionGet**
> Feed diabetesTherapiesDietNutritionGet(json)

Diet &amp; Nutrition

Diet &amp; Nutrition

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.TherapiesApi();

var json = 1.2; // Number | 1 menu

apiInstance.diabetesTherapiesDietNutritionGet(json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json** | **Number**| 1 menu | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="diabetesTherapiesGet"></a>
# **diabetesTherapiesGet**
> Feed diabetesTherapiesGet(json)

List Posts

posts list 

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.TherapiesApi();

var json = 1.2; // Number | Scope under which the request is made; determines fields present in response.

apiInstance.diabetesTherapiesGet(json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json** | **Number**| Scope under which the request is made; determines fields present in response. | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="diabetesTherapiesGlp1Get"></a>
# **diabetesTherapiesGlp1Get**
> Feed diabetesTherapiesGlp1Get(json)

GLP1 Agonist

GLP1 Agonist

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.TherapiesApi();

var json = 1.2; // Number | 1 menu

apiInstance.diabetesTherapiesGlp1Get(json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json** | **Number**| 1 menu | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="diabetesTherapiesInsulinGet"></a>
# **diabetesTherapiesInsulinGet**
> Feed diabetesTherapiesInsulinGet(json)

Insulin

Insulin

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.TherapiesApi();

var json = 1.2; // Number | 1 menu

apiInstance.diabetesTherapiesInsulinGet(json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json** | **Number**| 1 menu | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="diabetesTherapiesMetforminGet"></a>
# **diabetesTherapiesMetforminGet**
> Feed diabetesTherapiesMetforminGet(json)

metformin

metformin

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.TherapiesApi();

var json = 1.2; // Number | 1 menu

apiInstance.diabetesTherapiesMetforminGet(json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json** | **Number**| 1 menu | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="diabetesTherapiesSglt2Get"></a>
# **diabetesTherapiesSglt2Get**
> Feed diabetesTherapiesSglt2Get(json)

SGLT2

SGLT2

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.TherapiesApi();

var json = 1.2; // Number | menu 1

apiInstance.diabetesTherapiesSglt2Get(json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json** | **Number**| menu 1 | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="diabetesTherapiesSulfonylureaGet"></a>
# **diabetesTherapiesSulfonylureaGet**
> Feed diabetesTherapiesSulfonylureaGet(json)

Sulfonylurea

Sulfonylurea

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.TherapiesApi();

var json = 1.2; // Number | 1 menu

apiInstance.diabetesTherapiesSulfonylureaGet(json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json** | **Number**| 1 menu | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

