# `dataGithubRepositoryDeploymentBranchPolicies` Submodule <a name="`dataGithubRepositoryDeploymentBranchPolicies` Submodule" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryDeploymentBranchPolicies <a name="DataGithubRepositoryDeploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_deployment_branch_policies github_repository_deployment_branch_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer"></a>

```typescript
import { dataGithubRepositoryDeploymentBranchPolicies } from '@cdktf/provider-github'

new dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies(scope: Construct, id: string, config: DataGithubRepositoryDeploymentBranchPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig">DataGithubRepositoryDeploymentBranchPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig">DataGithubRepositoryDeploymentBranchPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryDeploymentBranchPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct"></a>

```typescript
import { dataGithubRepositoryDeploymentBranchPolicies } from '@cdktf/provider-github'

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement"></a>

```typescript
import { dataGithubRepositoryDeploymentBranchPolicies } from '@cdktf/provider-github'

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource"></a>

```typescript
import { dataGithubRepositoryDeploymentBranchPolicies } from '@cdktf/provider-github'

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport"></a>

```typescript
import { dataGithubRepositoryDeploymentBranchPolicies } from '@cdktf/provider-github'

dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubRepositoryDeploymentBranchPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubRepositoryDeploymentBranchPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubRepositoryDeploymentBranchPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_deployment_branch_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryDeploymentBranchPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.deploymentBranchPolicies">deploymentBranchPolicies</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentNameInput">environmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentName">environmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `deploymentBranchPolicies`<sup>Required</sup> <a name="deploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.deploymentBranchPolicies"></a>

```typescript
public readonly deploymentBranchPolicies: DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList</a>

---

##### `environmentNameInput`<sup>Optional</sup> <a name="environmentNameInput" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentNameInput"></a>

```typescript
public readonly environmentNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryDeploymentBranchPoliciesConfig <a name="DataGithubRepositoryDeploymentBranchPoliciesConfig" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.Initializer"></a>

```typescript
import { dataGithubRepositoryDeploymentBranchPolicies } from '@cdktf/provider-github'

const dataGithubRepositoryDeploymentBranchPoliciesConfig: dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.environmentName">environmentName</a></code> | <code>string</code> | The target environment name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.repository">repository</a></code> | <code>string</code> | The GitHub repository name. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

The target environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_deployment_branch_policies#environment_name DataGithubRepositoryDeploymentBranchPolicies#environment_name}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The GitHub repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_deployment_branch_policies#repository DataGithubRepositoryDeploymentBranchPolicies#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.43.0/docs/data-sources/repository_deployment_branch_policies#id DataGithubRepositoryDeploymentBranchPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies.Initializer"></a>

```typescript
import { dataGithubRepositoryDeploymentBranchPolicies } from '@cdktf/provider-github'

const dataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies: dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer"></a>

```typescript
import { dataGithubRepositoryDeploymentBranchPolicies } from '@cdktf/provider-github'

new dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get"></a>

```typescript
public get(index: number): DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference <a name="DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer"></a>

```typescript
import { dataGithubRepositoryDeploymentBranchPolicies } from '@cdktf/provider-github'

new dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeploymentBranchPolicies.DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies">DataGithubRepositoryDeploymentBranchPoliciesDeploymentBranchPolicies</a>

---



