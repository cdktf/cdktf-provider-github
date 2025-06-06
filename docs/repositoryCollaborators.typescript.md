# `repositoryCollaborators` Submodule <a name="`repositoryCollaborators` Submodule" id="@cdktf/provider-github.repositoryCollaborators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryCollaborators <a name="RepositoryCollaborators" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators github_repository_collaborators}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

new repositoryCollaborators.RepositoryCollaborators(scope: Construct, id: string, config: RepositoryCollaboratorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig">RepositoryCollaboratorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig">RepositoryCollaboratorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putIgnoreTeam">putIgnoreTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putTeam">putTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetIgnoreTeam">resetIgnoreTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetTeam">resetTeam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIgnoreTeam` <a name="putIgnoreTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putIgnoreTeam"></a>

```typescript
public putIgnoreTeam(value: IResolvable | RepositoryCollaboratorsIgnoreTeam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putIgnoreTeam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam">RepositoryCollaboratorsIgnoreTeam</a>[]

---

##### `putTeam` <a name="putTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putTeam"></a>

```typescript
public putTeam(value: IResolvable | RepositoryCollaboratorsTeam[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putTeam.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>[]

---

##### `putUser` <a name="putUser" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putUser"></a>

```typescript
public putUser(value: IResolvable | RepositoryCollaboratorsUser[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putUser.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreTeam` <a name="resetIgnoreTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetIgnoreTeam"></a>

```typescript
public resetIgnoreTeam(): void
```

##### `resetTeam` <a name="resetTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetTeam"></a>

```typescript
public resetTeam(): void
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetUser"></a>

```typescript
public resetUser(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isConstruct"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

repositoryCollaborators.RepositoryCollaborators.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformElement"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

repositoryCollaborators.RepositoryCollaborators.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformResource"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

repositoryCollaborators.RepositoryCollaborators.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

repositoryCollaborators.RepositoryCollaborators.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryCollaborators to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryCollaborators that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryCollaborators to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.ignoreTeam">ignoreTeam</a></code> | <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList">RepositoryCollaboratorsIgnoreTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.invitationIds">invitationIds</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.team">team</a></code> | <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList">RepositoryCollaboratorsTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.user">user</a></code> | <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList">RepositoryCollaboratorsUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.ignoreTeamInput">ignoreTeamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam">RepositoryCollaboratorsIgnoreTeam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.teamInput">teamInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.userInput">userInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ignoreTeam`<sup>Required</sup> <a name="ignoreTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.ignoreTeam"></a>

```typescript
public readonly ignoreTeam: RepositoryCollaboratorsIgnoreTeamList;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList">RepositoryCollaboratorsIgnoreTeamList</a>

---

##### `invitationIds`<sup>Required</sup> <a name="invitationIds" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.invitationIds"></a>

```typescript
public readonly invitationIds: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.team"></a>

```typescript
public readonly team: RepositoryCollaboratorsTeamList;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList">RepositoryCollaboratorsTeamList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.user"></a>

```typescript
public readonly user: RepositoryCollaboratorsUserList;
```

- *Type:* <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList">RepositoryCollaboratorsUserList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreTeamInput`<sup>Optional</sup> <a name="ignoreTeamInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.ignoreTeamInput"></a>

```typescript
public readonly ignoreTeamInput: IResolvable | RepositoryCollaboratorsIgnoreTeam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam">RepositoryCollaboratorsIgnoreTeam</a>[]

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `teamInput`<sup>Optional</sup> <a name="teamInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.teamInput"></a>

```typescript
public readonly teamInput: IResolvable | RepositoryCollaboratorsTeam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>[]

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.userInput"></a>

```typescript
public readonly userInput: IResolvable | RepositoryCollaboratorsUser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryCollaboratorsConfig <a name="RepositoryCollaboratorsConfig" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

const repositoryCollaboratorsConfig: repositoryCollaborators.RepositoryCollaboratorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.ignoreTeam">ignoreTeam</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam">RepositoryCollaboratorsIgnoreTeam</a>[]</code> | ignore_team block. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.team">team</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>[]</code> | team block. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.user">user</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>[]</code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreTeam`<sup>Optional</sup> <a name="ignoreTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.ignoreTeam"></a>

```typescript
public readonly ignoreTeam: IResolvable | RepositoryCollaboratorsIgnoreTeam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam">RepositoryCollaboratorsIgnoreTeam</a>[]

ignore_team block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#ignore_team RepositoryCollaborators#ignore_team}

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.team"></a>

```typescript
public readonly team: IResolvable | RepositoryCollaboratorsTeam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>[]

team block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#team RepositoryCollaborators#team}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.user"></a>

```typescript
public readonly user: IResolvable | RepositoryCollaboratorsUser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>[]

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#user RepositoryCollaborators#user}

---

### RepositoryCollaboratorsIgnoreTeam <a name="RepositoryCollaboratorsIgnoreTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

const repositoryCollaboratorsIgnoreTeam: repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam.property.teamId">teamId</a></code> | <code>string</code> | ID or slug of the team to ignore. |

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

ID or slug of the team to ignore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#team_id RepositoryCollaborators#team_id}

---

### RepositoryCollaboratorsTeam <a name="RepositoryCollaboratorsTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

const repositoryCollaboratorsTeam: repositoryCollaborators.RepositoryCollaboratorsTeam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.teamId">teamId</a></code> | <code>string</code> | Team ID or slug to add to the repository as a collaborator. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}. |

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

Team ID or slug to add to the repository as a collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#team_id RepositoryCollaborators#team_id}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}.

---

### RepositoryCollaboratorsUser <a name="RepositoryCollaboratorsUser" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

const repositoryCollaboratorsUser: repositoryCollaborators.RepositoryCollaboratorsUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.username">username</a></code> | <code>string</code> | (Required) The user to add to the repository as a collaborator. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

(Required) The user to add to the repository as a collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#username RepositoryCollaborators#username}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}.

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryCollaboratorsIgnoreTeamList <a name="RepositoryCollaboratorsIgnoreTeamList" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

new repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.get"></a>

```typescript
public get(index: number): RepositoryCollaboratorsIgnoreTeamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam">RepositoryCollaboratorsIgnoreTeam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryCollaboratorsIgnoreTeam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam">RepositoryCollaboratorsIgnoreTeam</a>[]

---


### RepositoryCollaboratorsIgnoreTeamOutputReference <a name="RepositoryCollaboratorsIgnoreTeamOutputReference" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

new repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam">RepositoryCollaboratorsIgnoreTeam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryCollaboratorsIgnoreTeam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsIgnoreTeam">RepositoryCollaboratorsIgnoreTeam</a>

---


### RepositoryCollaboratorsTeamList <a name="RepositoryCollaboratorsTeamList" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

new repositoryCollaborators.RepositoryCollaboratorsTeamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.get"></a>

```typescript
public get(index: number): RepositoryCollaboratorsTeamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryCollaboratorsTeam[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>[]

---


### RepositoryCollaboratorsTeamOutputReference <a name="RepositoryCollaboratorsTeamOutputReference" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

new repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryCollaboratorsTeam;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>

---


### RepositoryCollaboratorsUserList <a name="RepositoryCollaboratorsUserList" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

new repositoryCollaborators.RepositoryCollaboratorsUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.get"></a>

```typescript
public get(index: number): RepositoryCollaboratorsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryCollaboratorsUser[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>[]

---


### RepositoryCollaboratorsUserOutputReference <a name="RepositoryCollaboratorsUserOutputReference" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer"></a>

```typescript
import { repositoryCollaborators } from '@cdktf/provider-github'

new repositoryCollaborators.RepositoryCollaboratorsUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RepositoryCollaboratorsUser;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>

---



