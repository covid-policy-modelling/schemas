# COVID-UI Schemas

The schemas documenting communication shared between the [model-runner](https://github.com/covid-policy-modelling/model-runner), the [web interface](https://github.com/covid-policy-modelling/web-ui), and the [model connectors](https://github.com/covid-policy-modelling/model-connector-template).

## Generating schema

Only the Typescript types in `src/` (or example files in `docs/*-annotated.json`) should be updated manually.
After making a change, run `npm run generate-schema` to update the JSON schema files and documentation automatically.

## Adding / documenting schemas

The initial purpose of this repository was to define common input and output schemas which could be used by connectors for a variety of different models, allowing simulations to be defined using the web-ui and executed with multiple models.
Over time, this has extended to also allow model developers to use the API of the web-ui to submit simulations for an individual model, using model-specific parameters.
These parameters still need to be defined in this repository.

To add a new schema, you can use the existing schemas as examples, but at a minimum you must:

* Add a new type defining the input schema to `input-<name>.ts`
* Add a new type defining the output schema to `output-<name>.ts`
* Add the new type to the `ModelInput` type union in `input.ts`
* Add the new type to the `ModelOutput` type union in `model-output.ts`
* Update `script/generate-schema` to generate JSON schema files from the types
* Update `script/generate-schema` to generate markdown documentation from the schema (using `wetzel`)

You should add documentation for the new schemas into the Typescript comments as much as possible, as these comments are automatically extracted into the documentation, and into the API documentation of the web-ui.
If necessary, you can also add annotated example files into `docs`, but you should then update `script/generate-schema` to ensure that these examples are valid using `ajv` (once the annotations are removed, using `strip-json-comments`).


## Publishing

To publish the `@covid-policy-modelling/api` package:

1. Update the version of the api package in its `package.json` file.
1. Push this to origin, make sure it passes CI and makes its way to master.
1. Run the `script/publish-release` with the name of the new release in
   the form `vA.B.C`. This creates the tag and pushes it to the `origin`
   remote.

