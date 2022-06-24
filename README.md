# COVID-UI Schemas

The schemas documenting communication shared between the [model-runner](https://github.com/covid-policy-modelling/model-runner), the [web interface](https://github.com/covid-policy-modelling/web-ui), and the [model connectors](https://github.com/covid-policy-modelling/model-connector-template).

## Generating schema

Only the Typescript types in `src/` (or example files in `docs/*-annotated.json`) should be updated manually.
After making a change, run `npm run build` to update the JSON schema files and documentation automatically.

## Adding / documenting schemas

The initial purpose of this repository was to define common input and output schemas which could be used by connectors for a variety of different models, allowing simulations to be defined using the web-ui and executed with multiple models.
Over time, this has extended to also allow model developers to use the API of the web-ui to submit simulations for an individual model, using model-specific parameters.
These parameters still need to be defined in this repository.

To add a new schema, at a minimum you must:

1. Create a new file called `src/input-<name>.ts`, containing a type `<Name>ModelInput` (and any necessary related types)
    * You can use the existing types `src/input-minimal.ts` and `src/input-common.ts` as examples
    * You should add documentation for the new type into the Typescript comments as much as possible, as these comments are automatically extracted into the documentation, and into the API documentation of the web-ui
1. Create a new file called `src/output-<name>.ts`, containing a type `<Name>ModelOutput` (and any necessary related types)
    * Your `<Name>ModelOutput` type should include a field `metadata: <Name>ModelInput`
    * Again, you can use the existing types `src/output-minimal.ts` and `src/output-common.ts` as examples
1. Edit the file `src/input.ts` to import your new type and add it to the `ModelInput` type union
1. Edit the file `src/output.ts` to import your new type and add it to the `ModelInput` type union
1. Edit the file `script/generate-schema` to add the following

    ```bash
    echo Generating <name> input schema
    ts-json-schema-generator --path src/input-<name>.ts --type <Name>ModelInput --out schema/input-<name>.json
    wetzel schema/input-<name>.json -w > docs/input-<name>.md

    echo Generating <name> output schema
    ts-json-schema-generator --path src/output-<name>.ts --type <Name>ModelOutput --out schema/output-<name>.json
    wetzel schema/output-<name>.json -w > docs/output-<name>.md
    ```

1. Run `npm run build` to generate the schema and documentation
1. Commit your changes (including the generated schema and documentation files), and raise a PR in order to have them merged in

For particularly complicated schemas, you may also wish to add an example of a valid input file.
If you wish to do so:

1. Create a new file called `docs/input-<name>-annotated.json` containing your example
    * You can use the existing `docs/input-common-annotated.json` as an example
1. Edit the file `script/generate-schema` to add the following (after the line beginning `wetzel schema/input-<name>.json ...`)

    ```bash
    strip-json-comments --no-whitespace docs/input-<name>-annotated.json > docs/input-<name>-example.json
    ajv validate -s schema/input-<name>.json -d docs/input-<name>-example.json
    ```

1. Run `npm run build` to generate the schema and documentation, and validate your example

You can follow the same process to generate an example output file.

## Publishing

GitHub Actions will build, test, and publish whenever changes are committed to this repository, including pushing tags to the NPM registry.

To build and publish a numbered version of a package, run `npm version [major | minor | patch]`, then run `git push --tags`.
