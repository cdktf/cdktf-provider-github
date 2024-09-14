# `enterpriseActionsRunnerGroup` Submodule <a name="`enterpriseActionsRunnerGroup` Submodule" id="@cdktf/provider-github.enterpriseActionsRunnerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsRunnerGroup <a name="EnterpriseActionsRunnerGroup" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group github_enterprise_actions_runner_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer"></a>

```typescript
import { enterpriseActionsRunnerGroup } from '@cdktf/provider-github'

new enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup(scope: Construct, id: string, config: EnterpriseActionsRunnerGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig">EnterpriseActionsRunnerGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig">EnterpriseActionsRunnerGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories">resetAllowsPublicRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows">resetRestrictedToWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds">resetSelectedOrganizationIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows">resetSelectedWorkflows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowsPublicRepositories` <a name="resetAllowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetAllowsPublicRepositories"></a>

```typescript
public resetAllowsPublicRepositories(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRestrictedToWorkflows` <a name="resetRestrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetRestrictedToWorkflows"></a>

```typescript
public resetRestrictedToWorkflows(): void
```

##### `resetSelectedOrganizationIds` <a name="resetSelectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedOrganizationIds"></a>

```typescript
public resetSelectedOrganizationIds(): void
```

##### `resetSelectedWorkflows` <a name="resetSelectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.resetSelectedWorkflows"></a>

```typescript
public resetSelectedWorkflows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct"></a>

```typescript
import { enterpriseActionsRunnerGroup } from '@cdktf/provider-github'

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement"></a>

```typescript
import { enterpriseActionsRunnerGroup } from '@cdktf/provider-github'

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource"></a>

```typescript
import { enterpriseActionsRunnerGroup } from '@cdktf/provider-github'

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport"></a>

```typescript
import { enterpriseActionsRunnerGroup } from '@cdktf/provider-github'

enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EnterpriseActionsRunnerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseActionsRunnerGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseActionsRunnerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsRunnerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl">runnersUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl">selectedOrganizationsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput">allowsPublicRepositoriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput">enterpriseSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput">restrictedToWorkflowsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput">selectedOrganizationIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput">selectedWorkflowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories">allowsPublicRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug">enterpriseSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows">restrictedToWorkflows</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds">selectedOrganizationIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows">selectedWorkflows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `runnersUrl`<sup>Required</sup> <a name="runnersUrl" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.runnersUrl"></a>

```typescript
public readonly runnersUrl: string;
```

- *Type:* string

---

##### `selectedOrganizationsUrl`<sup>Required</sup> <a name="selectedOrganizationsUrl" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationsUrl"></a>

```typescript
public readonly selectedOrganizationsUrl: string;
```

- *Type:* string

---

##### `allowsPublicRepositoriesInput`<sup>Optional</sup> <a name="allowsPublicRepositoriesInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositoriesInput"></a>

```typescript
public readonly allowsPublicRepositoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterpriseSlugInput`<sup>Optional</sup> <a name="enterpriseSlugInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlugInput"></a>

```typescript
public readonly enterpriseSlugInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `restrictedToWorkflowsInput`<sup>Optional</sup> <a name="restrictedToWorkflowsInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflowsInput"></a>

```typescript
public readonly restrictedToWorkflowsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `selectedOrganizationIdsInput`<sup>Optional</sup> <a name="selectedOrganizationIdsInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIdsInput"></a>

```typescript
public readonly selectedOrganizationIdsInput: number[];
```

- *Type:* number[]

---

##### `selectedWorkflowsInput`<sup>Optional</sup> <a name="selectedWorkflowsInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflowsInput"></a>

```typescript
public readonly selectedWorkflowsInput: string[];
```

- *Type:* string[]

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `allowsPublicRepositories`<sup>Required</sup> <a name="allowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.allowsPublicRepositories"></a>

```typescript
public readonly allowsPublicRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.enterpriseSlug"></a>

```typescript
public readonly enterpriseSlug: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `restrictedToWorkflows`<sup>Required</sup> <a name="restrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.restrictedToWorkflows"></a>

```typescript
public readonly restrictedToWorkflows: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `selectedOrganizationIds`<sup>Required</sup> <a name="selectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedOrganizationIds"></a>

```typescript
public readonly selectedOrganizationIds: number[];
```

- *Type:* number[]

---

##### `selectedWorkflows`<sup>Required</sup> <a name="selectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.selectedWorkflows"></a>

```typescript
public readonly selectedWorkflows: string[];
```

- *Type:* string[]

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsRunnerGroupConfig <a name="EnterpriseActionsRunnerGroupConfig" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.Initializer"></a>

```typescript
import { enterpriseActionsRunnerGroup } from '@cdktf/provider-github'

const enterpriseActionsRunnerGroupConfig: enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug">enterpriseSlug</a></code> | <code>string</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility">visibility</a></code> | <code>string</code> | The visibility of the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories">allowsPublicRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether public repositories can be added to the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows">restrictedToWorkflows</a></code> | <code>boolean \| cdktf.IResolvable</code> | If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds">selectedOrganizationIds</a></code> | <code>number[]</code> | List of organization IDs that can access the runner group. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows">selectedWorkflows</a></code> | <code>string[]</code> | List of workflows the runner group should be allowed to run. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.enterpriseSlug"></a>

```typescript
public readonly enterpriseSlug: string;
```

- *Type:* string

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#enterprise_slug EnterpriseActionsRunnerGroup#enterprise_slug}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#name EnterpriseActionsRunnerGroup#name}

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

The visibility of the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#visibility EnterpriseActionsRunnerGroup#visibility}

---

##### `allowsPublicRepositories`<sup>Optional</sup> <a name="allowsPublicRepositories" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.allowsPublicRepositories"></a>

```typescript
public readonly allowsPublicRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether public repositories can be added to the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#allows_public_repositories EnterpriseActionsRunnerGroup#allows_public_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#id EnterpriseActionsRunnerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restrictedToWorkflows`<sup>Optional</sup> <a name="restrictedToWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.restrictedToWorkflows"></a>

```typescript
public readonly restrictedToWorkflows: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If 'true', the runner group will be restricted to running only the workflows specified in the 'selected_workflows' array.

Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#restricted_to_workflows EnterpriseActionsRunnerGroup#restricted_to_workflows}

---

##### `selectedOrganizationIds`<sup>Optional</sup> <a name="selectedOrganizationIds" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedOrganizationIds"></a>

```typescript
public readonly selectedOrganizationIds: number[];
```

- *Type:* number[]

List of organization IDs that can access the runner group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#selected_organization_ids EnterpriseActionsRunnerGroup#selected_organization_ids}

---

##### `selectedWorkflows`<sup>Optional</sup> <a name="selectedWorkflows" id="@cdktf/provider-github.enterpriseActionsRunnerGroup.EnterpriseActionsRunnerGroupConfig.property.selectedWorkflows"></a>

```typescript
public readonly selectedWorkflows: string[];
```

- *Type:* string[]

List of workflows the runner group should be allowed to run.

This setting will be ignored unless restricted_to_workflows is set to 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/enterprise_actions_runner_group#selected_workflows EnterpriseActionsRunnerGroup#selected_workflows}

---



