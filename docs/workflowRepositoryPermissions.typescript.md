# `workflowRepositoryPermissions` Submodule <a name="`workflowRepositoryPermissions` Submodule" id="@cdktf/provider-github.workflowRepositoryPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkflowRepositoryPermissions <a name="WorkflowRepositoryPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions github_workflow_repository_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer"></a>

```typescript
import { workflowRepositoryPermissions } from '@cdktf/provider-github'

new workflowRepositoryPermissions.WorkflowRepositoryPermissions(scope: Construct, id: string, config: WorkflowRepositoryPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig">WorkflowRepositoryPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig">WorkflowRepositoryPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetCanApprovePullRequestReviews">resetCanApprovePullRequestReviews</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetDefaultWorkflowPermissions">resetDefaultWorkflowPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCanApprovePullRequestReviews` <a name="resetCanApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetCanApprovePullRequestReviews"></a>

```typescript
public resetCanApprovePullRequestReviews(): void
```

##### `resetDefaultWorkflowPermissions` <a name="resetDefaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetDefaultWorkflowPermissions"></a>

```typescript
public resetDefaultWorkflowPermissions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkflowRepositoryPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct"></a>

```typescript
import { workflowRepositoryPermissions } from '@cdktf/provider-github'

workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement"></a>

```typescript
import { workflowRepositoryPermissions } from '@cdktf/provider-github'

workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource"></a>

```typescript
import { workflowRepositoryPermissions } from '@cdktf/provider-github'

workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport"></a>

```typescript
import { workflowRepositoryPermissions } from '@cdktf/provider-github'

workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkflowRepositoryPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkflowRepositoryPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkflowRepositoryPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkflowRepositoryPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviewsInput">canApprovePullRequestReviewsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissionsInput">defaultWorkflowPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `canApprovePullRequestReviewsInput`<sup>Optional</sup> <a name="canApprovePullRequestReviewsInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviewsInput"></a>

```typescript
public readonly canApprovePullRequestReviewsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultWorkflowPermissionsInput`<sup>Optional</sup> <a name="defaultWorkflowPermissionsInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissionsInput"></a>

```typescript
public readonly defaultWorkflowPermissionsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `canApprovePullRequestReviews`<sup>Required</sup> <a name="canApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.canApprovePullRequestReviews"></a>

```typescript
public readonly canApprovePullRequestReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultWorkflowPermissions`<sup>Required</sup> <a name="defaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.defaultWorkflowPermissions"></a>

```typescript
public readonly defaultWorkflowPermissions: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkflowRepositoryPermissionsConfig <a name="WorkflowRepositoryPermissionsConfig" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.Initializer"></a>

```typescript
import { workflowRepositoryPermissions } from '@cdktf/provider-github'

const workflowRepositoryPermissionsConfig: workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.repository">repository</a></code> | <code>string</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.canApprovePullRequestReviews">canApprovePullRequestReviews</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether GitHub Actions can approve pull requests. Enabling this can be a security risk. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.defaultWorkflowPermissions">defaultWorkflowPermissions</a></code> | <code>string</code> | The default workflow permissions granted to the GITHUB_TOKEN when running workflows. |
| <code><a href="#@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#id WorkflowRepositoryPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#repository WorkflowRepositoryPermissions#repository}

---

##### `canApprovePullRequestReviews`<sup>Optional</sup> <a name="canApprovePullRequestReviews" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.canApprovePullRequestReviews"></a>

```typescript
public readonly canApprovePullRequestReviews: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether GitHub Actions can approve pull requests. Enabling this can be a security risk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#can_approve_pull_request_reviews WorkflowRepositoryPermissions#can_approve_pull_request_reviews}

---

##### `defaultWorkflowPermissions`<sup>Optional</sup> <a name="defaultWorkflowPermissions" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.defaultWorkflowPermissions"></a>

```typescript
public readonly defaultWorkflowPermissions: string;
```

- *Type:* string

The default workflow permissions granted to the GITHUB_TOKEN when running workflows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#default_workflow_permissions WorkflowRepositoryPermissions#default_workflow_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.workflowRepositoryPermissions.WorkflowRepositoryPermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.0/docs/resources/workflow_repository_permissions#id WorkflowRepositoryPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



