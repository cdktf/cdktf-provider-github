# `dataGithubRepositoryAutolinkReferences` Submodule <a name="`dataGithubRepositoryAutolinkReferences` Submodule" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryAutolinkReferences <a name="DataGithubRepositoryAutolinkReferences" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/repository_autolink_references github_repository_autolink_references}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer"></a>

```typescript
import { dataGithubRepositoryAutolinkReferences } from '@cdktf/provider-github'

new dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences(scope: Construct, id: string, config: DataGithubRepositoryAutolinkReferencesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig">DataGithubRepositoryAutolinkReferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig">DataGithubRepositoryAutolinkReferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryAutolinkReferences resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct"></a>

```typescript
import { dataGithubRepositoryAutolinkReferences } from '@cdktf/provider-github'

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement"></a>

```typescript
import { dataGithubRepositoryAutolinkReferences } from '@cdktf/provider-github'

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource"></a>

```typescript
import { dataGithubRepositoryAutolinkReferences } from '@cdktf/provider-github'

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport"></a>

```typescript
import { dataGithubRepositoryAutolinkReferences } from '@cdktf/provider-github'

dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubRepositoryAutolinkReferences resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubRepositoryAutolinkReferences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubRepositoryAutolinkReferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/repository_autolink_references#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryAutolinkReferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.autolinkReferences">autolinkReferences</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList">DataGithubRepositoryAutolinkReferencesAutolinkReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `autolinkReferences`<sup>Required</sup> <a name="autolinkReferences" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.autolinkReferences"></a>

```typescript
public readonly autolinkReferences: DataGithubRepositoryAutolinkReferencesAutolinkReferencesList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList">DataGithubRepositoryAutolinkReferencesAutolinkReferencesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferences.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryAutolinkReferencesAutolinkReferences <a name="DataGithubRepositoryAutolinkReferencesAutolinkReferences" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences.Initializer"></a>

```typescript
import { dataGithubRepositoryAutolinkReferences } from '@cdktf/provider-github'

const dataGithubRepositoryAutolinkReferencesAutolinkReferences: dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences = { ... }
```


### DataGithubRepositoryAutolinkReferencesConfig <a name="DataGithubRepositoryAutolinkReferencesConfig" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.Initializer"></a>

```typescript
import { dataGithubRepositoryAutolinkReferences } from '@cdktf/provider-github'

const dataGithubRepositoryAutolinkReferencesConfig: dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/repository_autolink_references#repository DataGithubRepositoryAutolinkReferences#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/data-sources/repository_autolink_references#id DataGithubRepositoryAutolinkReferences#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryAutolinkReferencesAutolinkReferencesList <a name="DataGithubRepositoryAutolinkReferencesAutolinkReferencesList" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer"></a>

```typescript
import { dataGithubRepositoryAutolinkReferences } from '@cdktf/provider-github'

new dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.get"></a>

```typescript
public get(index: number): DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference <a name="DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer"></a>

```typescript
import { dataGithubRepositoryAutolinkReferences } from '@cdktf/provider-github'

new dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.isAlphanumeric">isAlphanumeric</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.targetUrlTemplate">targetUrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences">DataGithubRepositoryAutolinkReferencesAutolinkReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isAlphanumeric`<sup>Required</sup> <a name="isAlphanumeric" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.isAlphanumeric"></a>

```typescript
public readonly isAlphanumeric: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `targetUrlTemplate`<sup>Required</sup> <a name="targetUrlTemplate" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.targetUrlTemplate"></a>

```typescript
public readonly targetUrlTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubRepositoryAutolinkReferencesAutolinkReferences;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryAutolinkReferences.DataGithubRepositoryAutolinkReferencesAutolinkReferences">DataGithubRepositoryAutolinkReferencesAutolinkReferences</a>

---



