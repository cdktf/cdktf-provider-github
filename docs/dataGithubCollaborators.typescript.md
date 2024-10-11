# `dataGithubCollaborators` Submodule <a name="`dataGithubCollaborators` Submodule" id="@cdktf/provider-github.dataGithubCollaborators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubCollaborators <a name="DataGithubCollaborators" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators github_collaborators}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer"></a>

```typescript
import { dataGithubCollaborators } from '@cdktf/provider-github'

new dataGithubCollaborators.DataGithubCollaborators(scope: Construct, id: string, config: DataGithubCollaboratorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig">DataGithubCollaboratorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig">DataGithubCollaboratorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetAffiliation">resetAffiliation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAffiliation` <a name="resetAffiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetAffiliation"></a>

```typescript
public resetAffiliation(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.resetPermission"></a>

```typescript
public resetPermission(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubCollaborators resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isConstruct"></a>

```typescript
import { dataGithubCollaborators } from '@cdktf/provider-github'

dataGithubCollaborators.DataGithubCollaborators.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformElement"></a>

```typescript
import { dataGithubCollaborators } from '@cdktf/provider-github'

dataGithubCollaborators.DataGithubCollaborators.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource"></a>

```typescript
import { dataGithubCollaborators } from '@cdktf/provider-github'

dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport"></a>

```typescript
import { dataGithubCollaborators } from '@cdktf/provider-github'

dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubCollaborators resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubCollaborators to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubCollaborators that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubCollaborators to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.collaborator">collaborator</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList">DataGithubCollaboratorsCollaboratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliationInput">affiliationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliation">affiliation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `collaborator`<sup>Required</sup> <a name="collaborator" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.collaborator"></a>

```typescript
public readonly collaborator: DataGithubCollaboratorsCollaboratorList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList">DataGithubCollaboratorsCollaboratorList</a>

---

##### `affiliationInput`<sup>Optional</sup> <a name="affiliationInput" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliationInput"></a>

```typescript
public readonly affiliationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `affiliation`<sup>Required</sup> <a name="affiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.affiliation"></a>

```typescript
public readonly affiliation: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaborators.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubCollaboratorsCollaborator <a name="DataGithubCollaboratorsCollaborator" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator.Initializer"></a>

```typescript
import { dataGithubCollaborators } from '@cdktf/provider-github'

const dataGithubCollaboratorsCollaborator: dataGithubCollaborators.DataGithubCollaboratorsCollaborator = { ... }
```


### DataGithubCollaboratorsConfig <a name="DataGithubCollaboratorsConfig" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.Initializer"></a>

```typescript
import { dataGithubCollaborators } from '@cdktf/provider-github'

const dataGithubCollaboratorsConfig: dataGithubCollaborators.DataGithubCollaboratorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.affiliation">affiliation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#id DataGithubCollaborators#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#permission DataGithubCollaborators#permission}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#owner DataGithubCollaborators#owner}.

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#repository DataGithubCollaborators#repository}.

---

##### `affiliation`<sup>Optional</sup> <a name="affiliation" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.affiliation"></a>

```typescript
public readonly affiliation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#affiliation DataGithubCollaborators#affiliation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#id DataGithubCollaborators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsConfig.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/data-sources/collaborators#permission DataGithubCollaborators#permission}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGithubCollaboratorsCollaboratorList <a name="DataGithubCollaboratorsCollaboratorList" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer"></a>

```typescript
import { dataGithubCollaborators } from '@cdktf/provider-github'

new dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.get"></a>

```typescript
public get(index: number): DataGithubCollaboratorsCollaboratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubCollaboratorsCollaboratorOutputReference <a name="DataGithubCollaboratorsCollaboratorOutputReference" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer"></a>

```typescript
import { dataGithubCollaborators } from '@cdktf/provider-github'

new dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.eventsUrl">eventsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followersUrl">followersUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followingUrl">followingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.gistsUrl">gistsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.htmlUrl">htmlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.organizationsUrl">organizationsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.receivedEventsUrl">receivedEventsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.reposUrl">reposUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.siteAdmin">siteAdmin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.starredUrl">starredUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.subscriptionsUrl">subscriptionsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator">DataGithubCollaboratorsCollaborator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventsUrl`<sup>Required</sup> <a name="eventsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.eventsUrl"></a>

```typescript
public readonly eventsUrl: string;
```

- *Type:* string

---

##### `followersUrl`<sup>Required</sup> <a name="followersUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followersUrl"></a>

```typescript
public readonly followersUrl: string;
```

- *Type:* string

---

##### `followingUrl`<sup>Required</sup> <a name="followingUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.followingUrl"></a>

```typescript
public readonly followingUrl: string;
```

- *Type:* string

---

##### `gistsUrl`<sup>Required</sup> <a name="gistsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.gistsUrl"></a>

```typescript
public readonly gistsUrl: string;
```

- *Type:* string

---

##### `htmlUrl`<sup>Required</sup> <a name="htmlUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.htmlUrl"></a>

```typescript
public readonly htmlUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `organizationsUrl`<sup>Required</sup> <a name="organizationsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.organizationsUrl"></a>

```typescript
public readonly organizationsUrl: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `receivedEventsUrl`<sup>Required</sup> <a name="receivedEventsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.receivedEventsUrl"></a>

```typescript
public readonly receivedEventsUrl: string;
```

- *Type:* string

---

##### `reposUrl`<sup>Required</sup> <a name="reposUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.reposUrl"></a>

```typescript
public readonly reposUrl: string;
```

- *Type:* string

---

##### `siteAdmin`<sup>Required</sup> <a name="siteAdmin" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.siteAdmin"></a>

```typescript
public readonly siteAdmin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `starredUrl`<sup>Required</sup> <a name="starredUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.starredUrl"></a>

```typescript
public readonly starredUrl: string;
```

- *Type:* string

---

##### `subscriptionsUrl`<sup>Required</sup> <a name="subscriptionsUrl" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.subscriptionsUrl"></a>

```typescript
public readonly subscriptionsUrl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaboratorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubCollaboratorsCollaborator;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCollaborators.DataGithubCollaboratorsCollaborator">DataGithubCollaboratorsCollaborator</a>

---



