# `dataGithubOrganizationCustomProperties` Submodule <a name="`dataGithubOrganizationCustomProperties` Submodule" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationCustomProperties <a name="DataGithubOrganizationCustomProperties" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties github_organization_custom_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer"></a>

```typescript
import { dataGithubOrganizationCustomProperties } from '@cdktf/provider-github'

new dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties(scope: Construct, id: string, config: DataGithubOrganizationCustomPropertiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig">DataGithubOrganizationCustomPropertiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig">DataGithubOrganizationCustomPropertiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetAllowedValues">resetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowedValues` <a name="resetAllowedValues" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetAllowedValues"></a>

```typescript
public resetAllowedValues(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetRequired"></a>

```typescript
public resetRequired(): void
```

##### `resetValueType` <a name="resetValueType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.resetValueType"></a>

```typescript
public resetValueType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct"></a>

```typescript
import { dataGithubOrganizationCustomProperties } from '@cdktf/provider-github'

dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement"></a>

```typescript
import { dataGithubOrganizationCustomProperties } from '@cdktf/provider-github'

dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource"></a>

```typescript
import { dataGithubOrganizationCustomProperties } from '@cdktf/provider-github'

dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport"></a>

```typescript
import { dataGithubOrganizationCustomProperties } from '@cdktf/provider-github'

dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubOrganizationCustomProperties resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubOrganizationCustomProperties to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubOrganizationCustomProperties that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubOrganizationCustomProperties to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValuesInput">allowedValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyNameInput">propertyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueTypeInput">valueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyName">propertyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allowedValuesInput`<sup>Optional</sup> <a name="allowedValuesInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValuesInput"></a>

```typescript
public readonly allowedValuesInput: string[];
```

- *Type:* string[]

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `propertyNameInput`<sup>Optional</sup> <a name="propertyNameInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyNameInput"></a>

```typescript
public readonly propertyNameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueTypeInput"></a>

```typescript
public readonly valueTypeInput: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomProperties.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationCustomPropertiesConfig <a name="DataGithubOrganizationCustomPropertiesConfig" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.Initializer"></a>

```typescript
import { dataGithubOrganizationCustomProperties } from '@cdktf/provider-github'

const dataGithubOrganizationCustomPropertiesConfig: dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.propertyName">propertyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.valueType">valueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.propertyName"></a>

```typescript
public readonly propertyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#property_name DataGithubOrganizationCustomProperties#property_name}.

---

##### `allowedValues`<sup>Optional</sup> <a name="allowedValues" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#allowed_values DataGithubOrganizationCustomProperties#allowed_values}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#default_value DataGithubOrganizationCustomProperties#default_value}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#description DataGithubOrganizationCustomProperties#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#id DataGithubOrganizationCustomProperties#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#required DataGithubOrganizationCustomProperties#required}.

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktf/provider-github.dataGithubOrganizationCustomProperties.DataGithubOrganizationCustomPropertiesConfig.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.1/docs/data-sources/organization_custom_properties#value_type DataGithubOrganizationCustomProperties#value_type}.

---



