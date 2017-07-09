# fhir-resource-generator

Ever needed to generate a FHIR resource quickly? Don't want to have multiple data files containing your test data? Then give fhir-resource-generator a go to randomly generate complete or user-specified FHIR-compliant resources!

[![Build Status](https://travis-ci.org/markgillnz/fhir-resource-generator.svg?branch=master)](https://travis-ci.org/markgillnz/fhir-resource-generator)
[![npm version](https://badge.fury.io/js/fhir-resource-generator.svg)](https://badge.fury.io/js/fhir-resource-generator)


## Usage

```
import generator from 'fhir-resource-generator'

// Full random FHIR DSTU2 Patient resource
const patient = generator.dstu2.patient();

// Random FHIR DSTU2 AllergyIntolerance resource with fields identifier containing two identifiers and substance
const allergyIntolerance = generator.dstu2.allergyIntolerance({ identifier: 2, substance: 1 });
```

## API

Only DSTU2 resources are available currently so all API methods are prefixed by ```generator.dstu2```. See [http://www.hl7.org/fhir/dstu2/documentation.html](FHIR DSTU2 documentation) for fields available on each resource.

### Complete Resources

To obtain a full random resource, simply call the relevant resource name:

* patient()
* allergyIntolerance()

### Partial Resources

If you only want certain fields in your resource then you can provide an object to any resource containing key:value pairs representing fields and the requested count of each field. Note that the count number only takes affect for fields with cardinality denoted by 0..* in the specifications.

Note that the fields ```resourceType``` and ```id``` are generated for every resource, regardless of the fields passed in.

_Example:_ Generator a FHIR AllergyIntolerance resource with 2 identifiers and criticality only.
```
generator.dstu2.allergyIntolerance({ identifier: 2, criticality: 1 });

{
  "resourceType": "AllergyIntolerance",
  "id": "cd540504-e053-46db-8fd0-0d1dcdbe2a84",
  "identifier": [
    {
      "use": "temp",
      "type": {
        "text": "integrated deposit",
        "coding": [
          {
            "system": "https://estelle.com",
            "code": "Handcrafted",
            "display": "Buckinghamshire Kansas withdrawal"
          }
        ]
      },
      "system": "http://rodrigo.com",
      "value": "Soap"
    },
    {
      "use": "usual",
      "type": {
        "text": "Business-focused plug-and-play leverage",
        "coding": [
          {
            "system": "http://devon.com",
            "code": "International",
            "display": "Small mobile Gorgeous Steel Bike"
          }
        ]
      },
      "system": "http://cecil.org",
      "value": "invoice"
    }
  ],
  "criticality": "CRITH"
}
```

### Overrides

As each resource is randomly generated, the details of the resource cannot be guaranteed. However, you can supply overrides so that you get a resource with known values.

_Example:_ Set the value of the first identifier to a known string.
```
generator.dstu2.patient({ identifier: 1, gender: 1 }, {
  'identifier.0.value': 'Overridden Identifier Value',
});

{
  "resourceType": "Patient",
  "id": "d5646f24-ac13-42b6-a247-41215a18ae9f",
  "identifier": [
    {
      "use": "official",
      "type": {
        "text": "Fresh Rapids",
        "coding": [
          {
            "system": "https://garth.org",
            "code": "Pants",
            "display": "Jersey synthesizing"
          },
          {
            "system": "http://georgiana.net",
            "code": "Borders",
            "display": "grey"
          }
        ]
      },
      "system": "https://kamryn.org",
      "value": "Overridden Identifier Value"
    }
  ],
  "gender": "male"
}
```

### Extensions

Each resource can also have an extension field. Extensions are generated separate to resources but can be added to your generated resource automatically by specifying ```{ extension: <extension> }``` as an override.

Extensions can also have their values overridden in the same fashion as resources.

#### Available Extensions

* Coding
* Identifier
* Inner Extension

_Example:_
```
generator.dstu2.extension({ coding: 1, extension: { identifier: 1 } };

[
  {
    "url": "https://stephania.biz",
    "valueCoding": {
      "system": "https://geovanny.info",
      "code": "transmitting",
      "display": "pixel SQL maximize"
    }
  },
  {
    "url": "http://enid.org",
    "extension": [
      {
        "url": "https://elliott.info",
        "valueIdentifier": {
          "use": "temp",
          "type": {
            "text": "Montana",
            "coding": [
              {
                "system": "http://shanon.com",
                "code": "Lilangeni",
                "display": "bandwidth world-class"
              }
            ]
          },
          "system": "https://ophelia.org",
          "value": "Lead"
        }
      }
    ]
  }
]
```
