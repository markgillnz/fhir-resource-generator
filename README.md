# fhir-resource-generator

Generate random FHIR resources

[![Build Status](https://travis-ci.org/markgillnz/fhir-resource-generator.svg?branch=master)](https://travis-ci.org/markgillnz/fhir-resource-generator)
[![npm version](https://badge.fury.io/js/fhir-resource-generator.svg)](https://badge.fury.io/js/fhir-resource-generator)

## Installation

```
npm install
```

## Usage


```
import generator from 'fhir-resource-generator'

// Full random FHIR DSTU2 Patient resource
const patient = generator.dstu2.patient();

// Random FHIR DSTU2 AllergyIntolerance resource with specific fields
const allergyIntolerance = generator.dstu2.allergyIntolerance({ substance: 1 })
```

## Development

```
npm run develop
```
