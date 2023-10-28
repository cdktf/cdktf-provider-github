# `github_actions_runner_group`

Refer to the Terraform Registory for docs: [`github_actions_runner_group`](https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group).

# `actionsRunnerGroup` Submodule <a name="`actionsRunnerGroup` Submodule" id="@cdktf/provider-github.actionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRunnerGroup <a name="ActionsRunnerGroup" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group github_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer"></a>

```typescript
import { actionsRunnerGroup } from '@cdktf/provider-github'

new actionsRunnerGroup.ActionsRunnerGroup(scope: Construct, id: string, config: ActionsRunnerGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig">ActionsRunnerGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig">ActionsRunnerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetAllowsPublicRepositories">resetAllowsPublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetRestrictedToWorkflows">resetRestrictedToWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds">resetSelectedRepositoryIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedWorkflows">resetSelectedWorkflows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAllowsPublicRepositories` <a name="resetAllowsPublicRepositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetAllowsPublicRepositories"></a>

```typescript
public resetAllowsPublicRepositories(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRestrictedToWorkflows` <a name="resetRestrictedToWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetRestrictedToWorkflows"></a>

```typescript
public resetRestrictedToWorkflows(): void
```

##### `resetSelectedRepositoryIds` <a name="resetSelectedRepositoryIds" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedRepositoryIds"></a>

```typescript
public resetSelectedRepositoryIds(): void
```

##### `resetSelectedWorkflows` <a name="resetSelectedWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.resetSelectedWorkflows"></a>

```typescript
public resetSelectedWorkflows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct"></a>

```typescript
import { actionsRunnerGroup } from '@cdktf/provider-github'

actionsRunnerGroup.ActionsRunnerGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement"></a>

```typescript
import { actionsRunnerGroup } from '@cdktf/provider-github'

actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource"></a>

```typescript
import { actionsRunnerGroup } from '@cdktf/provider-github'

actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport"></a>

```typescript
import { actionsRunnerGroup } from '@cdktf/provider-github'

actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ActionsRunnerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsRunnerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsRunnerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ActionsRunnerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited">inherited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl">runnersUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl">selectedRepositoriesUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositoriesInput">allowsPublicRepositoriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflowsInput">restrictedToWorkflowsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput">selectedRepositoryIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflowsInput">selectedWorkflowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories">allowsPublicRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows">restrictedToWorkflows</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows">selectedWorkflows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `inherited`<sup>Required</sup> <a name="inherited" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.inherited"></a>

```typescript
public readonly inherited: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `runnersUrl`<sup>Required</sup> <a name="runnersUrl" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.runnersUrl"></a>

```typescript
public readonly runnersUrl: string;
```

- *Type:* string

---

##### `selectedRepositoriesUrl`<sup>Required</sup> <a name="selectedRepositoriesUrl" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoriesUrl"></a>

```typescript
public readonly selectedRepositoriesUrl: string;
```

- *Type:* string

---

##### `allowsPublicRepositoriesInput`<sup>Optional</sup> <a name="allowsPublicRepositoriesInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositoriesInput"></a>

```typescript
public readonly allowsPublicRepositoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `restrictedToWorkflowsInput`<sup>Optional</sup> <a name="restrictedToWorkflowsInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflowsInput"></a>

```typescript
public readonly restrictedToWorkflowsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `selectedRepositoryIdsInput`<sup>Optional</sup> <a name="selectedRepositoryIdsInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIdsInput"></a>

```typescript
public readonly selectedRepositoryIdsInput: number[];
```

- *Type:* number[]

---

##### `selectedWorkflowsInput`<sup>Optional</sup> <a name="selectedWorkflowsInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflowsInput"></a>

```typescript
public readonly selectedWorkflowsInput: string[];
```

- *Type:* string[]

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `allowsPublicRepositories`<sup>Required</sup> <a name="allowsPublicRepositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.allowsPublicRepositories"></a>

```typescript
public readonly allowsPublicRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `restrictedToWorkflows`<sup>Required</sup> <a name="restrictedToWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.restrictedToWorkflows"></a>

```typescript
public readonly restrictedToWorkflows: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedRepositoryIds"></a>

```typescript
public readonly selectedRepositoryIds: number[];
```

- *Type:* number[]

---

##### `selectedWorkflows`<sup>Required</sup> <a name="selectedWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.selectedWorkflows"></a>

```typescript
public readonly selectedWorkflows: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRunnerGroupConfig <a name="ActionsRunnerGroupConfig" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.Initializer"></a>

```typescript
import { actionsRunnerGroup } from '@cdktf/provider-github'

const actionsRunnerGroupConfig: actionsRunnerGroup.ActionsRunnerGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility">visibility</a></code> | <code>string</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.allowsPublicRepositories">allowsPublicRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group#id ActionsRunnerGroup#id}. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.restrictedToWorkflows">restrictedToWorkflows</a></code> | <code>boolean \| cdktf.IResolvable</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>number[]</code> | List of repository IDs that can access the runner group. |
| <code><a href="#@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedWorkflows">selectedWorkflows</a></code> | <code>string[]</code> | List of workflows the runner group should be allowed to run. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group#name ActionsRunnerGroup#name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group#visibility ActionsRunnerGroup#visibility}

---

##### `allowsPublicRepositories`<sup>Optional</sup> <a name="allowsPublicRepositories" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.allowsPublicRepositories"></a>

```typescript
public readonly allowsPublicRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group#allows_public_repositories ActionsRunnerGroup#allows_public_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group#id ActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restrictedToWorkflows`<sup>Optional</sup> <a name="restrictedToWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.restrictedToWorkflows"></a>

```typescript
public readonly restrictedToWorkflows: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group#restricted_to_workflows ActionsRunnerGroup#restricted_to_workflows}

---

##### `selectedRepositoryIds`<sup>Optional</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedRepositoryIds"></a>

```typescript
public readonly selectedRepositoryIds: number[];
```

- *Type:* number[]

List of repository IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group#selected_repository_ids ActionsRunnerGroup#selected_repository_ids}

---

##### `selectedWorkflows`<sup>Optional</sup> <a name="selectedWorkflows" id="@cdktf/provider-github.actionsRunnerGroup.ActionsRunnerGroupConfig.property.selectedWorkflows"></a>

```typescript
public readonly selectedWorkflows: string[];
```

- *Type:* string[]

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/actions_runner_group#selected_workflows ActionsRunnerGroup#selected_workflows}

---



