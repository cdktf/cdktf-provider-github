# `dataGithubIpRanges` Submodule <a name="`dataGithubIpRanges` Submodule" id="@cdktf/provider-github.dataGithubIpRanges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubIpRanges <a name="DataGithubIpRanges" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/ip_ranges github_ip_ranges}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer"></a>

```typescript
import { dataGithubIpRanges } from '@cdktf/provider-github'

new dataGithubIpRanges.DataGithubIpRanges(scope: Construct, id: string, config?: DataGithubIpRangesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig">DataGithubIpRangesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig">DataGithubIpRangesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubIpRanges resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct"></a>

```typescript
import { dataGithubIpRanges } from '@cdktf/provider-github'

dataGithubIpRanges.DataGithubIpRanges.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement"></a>

```typescript
import { dataGithubIpRanges } from '@cdktf/provider-github'

dataGithubIpRanges.DataGithubIpRanges.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource"></a>

```typescript
import { dataGithubIpRanges } from '@cdktf/provider-github'

dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport"></a>

```typescript
import { dataGithubIpRanges } from '@cdktf/provider-github'

dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubIpRanges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubIpRanges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubIpRanges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/ip_ranges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubIpRanges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv4">actionsIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv6">actionsIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.api">api</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv4">apiIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv6">apiIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabot">dependabot</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv4">dependabotIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv6">dependabotIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.git">git</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv4">gitIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv6">gitIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooks">hooks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv4">hooksIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv6">hooksIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importer">importer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv4">importerIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv6">importerIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv4">packagesIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv6">packagesIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pages">pages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv4">pagesIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv6">pagesIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.web">web</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv4">webIpv4</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv6">webIpv6</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `actionsIpv4`<sup>Required</sup> <a name="actionsIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv4"></a>

```typescript
public readonly actionsIpv4: string[];
```

- *Type:* string[]

---

##### `actionsIpv6`<sup>Required</sup> <a name="actionsIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.actionsIpv6"></a>

```typescript
public readonly actionsIpv6: string[];
```

- *Type:* string[]

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.api"></a>

```typescript
public readonly api: string[];
```

- *Type:* string[]

---

##### `apiIpv4`<sup>Required</sup> <a name="apiIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv4"></a>

```typescript
public readonly apiIpv4: string[];
```

- *Type:* string[]

---

##### `apiIpv6`<sup>Required</sup> <a name="apiIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.apiIpv6"></a>

```typescript
public readonly apiIpv6: string[];
```

- *Type:* string[]

---

##### `dependabot`<sup>Required</sup> <a name="dependabot" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabot"></a>

```typescript
public readonly dependabot: string[];
```

- *Type:* string[]

---

##### `dependabotIpv4`<sup>Required</sup> <a name="dependabotIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv4"></a>

```typescript
public readonly dependabotIpv4: string[];
```

- *Type:* string[]

---

##### `dependabotIpv6`<sup>Required</sup> <a name="dependabotIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.dependabotIpv6"></a>

```typescript
public readonly dependabotIpv6: string[];
```

- *Type:* string[]

---

##### `git`<sup>Required</sup> <a name="git" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.git"></a>

```typescript
public readonly git: string[];
```

- *Type:* string[]

---

##### `gitIpv4`<sup>Required</sup> <a name="gitIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv4"></a>

```typescript
public readonly gitIpv4: string[];
```

- *Type:* string[]

---

##### `gitIpv6`<sup>Required</sup> <a name="gitIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.gitIpv6"></a>

```typescript
public readonly gitIpv6: string[];
```

- *Type:* string[]

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooks"></a>

```typescript
public readonly hooks: string[];
```

- *Type:* string[]

---

##### `hooksIpv4`<sup>Required</sup> <a name="hooksIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv4"></a>

```typescript
public readonly hooksIpv4: string[];
```

- *Type:* string[]

---

##### `hooksIpv6`<sup>Required</sup> <a name="hooksIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.hooksIpv6"></a>

```typescript
public readonly hooksIpv6: string[];
```

- *Type:* string[]

---

##### `importer`<sup>Required</sup> <a name="importer" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importer"></a>

```typescript
public readonly importer: string[];
```

- *Type:* string[]

---

##### `importerIpv4`<sup>Required</sup> <a name="importerIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv4"></a>

```typescript
public readonly importerIpv4: string[];
```

- *Type:* string[]

---

##### `importerIpv6`<sup>Required</sup> <a name="importerIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.importerIpv6"></a>

```typescript
public readonly importerIpv6: string[];
```

- *Type:* string[]

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---

##### `packagesIpv4`<sup>Required</sup> <a name="packagesIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv4"></a>

```typescript
public readonly packagesIpv4: string[];
```

- *Type:* string[]

---

##### `packagesIpv6`<sup>Required</sup> <a name="packagesIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.packagesIpv6"></a>

```typescript
public readonly packagesIpv6: string[];
```

- *Type:* string[]

---

##### `pages`<sup>Required</sup> <a name="pages" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pages"></a>

```typescript
public readonly pages: string[];
```

- *Type:* string[]

---

##### `pagesIpv4`<sup>Required</sup> <a name="pagesIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv4"></a>

```typescript
public readonly pagesIpv4: string[];
```

- *Type:* string[]

---

##### `pagesIpv6`<sup>Required</sup> <a name="pagesIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.pagesIpv6"></a>

```typescript
public readonly pagesIpv6: string[];
```

- *Type:* string[]

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.web"></a>

```typescript
public readonly web: string[];
```

- *Type:* string[]

---

##### `webIpv4`<sup>Required</sup> <a name="webIpv4" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv4"></a>

```typescript
public readonly webIpv4: string[];
```

- *Type:* string[]

---

##### `webIpv6`<sup>Required</sup> <a name="webIpv6" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.webIpv6"></a>

```typescript
public readonly webIpv6: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRanges.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubIpRangesConfig <a name="DataGithubIpRangesConfig" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.Initializer"></a>

```typescript
import { dataGithubIpRanges } from '@cdktf/provider-github'

const dataGithubIpRangesConfig: dataGithubIpRanges.DataGithubIpRangesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubIpRanges.DataGithubIpRangesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/data-sources/ip_ranges#id DataGithubIpRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



