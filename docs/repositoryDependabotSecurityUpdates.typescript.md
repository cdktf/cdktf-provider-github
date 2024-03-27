# `repositoryDependabotSecurityUpdates` Submodule <a name="`repositoryDependabotSecurityUpdates` Submodule" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryDependabotSecurityUpdates <a name="RepositoryDependabotSecurityUpdates" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_dependabot_security_updates github_repository_dependabot_security_updates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer"></a>

```typescript
import { repositoryDependabotSecurityUpdates } from '@cdktf/provider-github'

new repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates(scope: Construct, id: string, config: RepositoryDependabotSecurityUpdatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig">RepositoryDependabotSecurityUpdatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig">RepositoryDependabotSecurityUpdatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryDependabotSecurityUpdates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct"></a>

```typescript
import { repositoryDependabotSecurityUpdates } from '@cdktf/provider-github'

repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement"></a>

```typescript
import { repositoryDependabotSecurityUpdates } from '@cdktf/provider-github'

repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource"></a>

```typescript
import { repositoryDependabotSecurityUpdates } from '@cdktf/provider-github'

repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport"></a>

```typescript
import { repositoryDependabotSecurityUpdates } from '@cdktf/provider-github'

repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RepositoryDependabotSecurityUpdates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryDependabotSecurityUpdates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryDependabotSecurityUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_dependabot_security_updates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryDependabotSecurityUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryDependabotSecurityUpdatesConfig <a name="RepositoryDependabotSecurityUpdatesConfig" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.Initializer"></a>

```typescript
import { repositoryDependabotSecurityUpdates } from '@cdktf/provider-github'

const repositoryDependabotSecurityUpdatesConfig: repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | The state of the automated security fixes. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.repository">repository</a></code> | <code>string</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_dependabot_security_updates#id RepositoryDependabotSecurityUpdates#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The state of the automated security fixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_dependabot_security_updates#enabled RepositoryDependabotSecurityUpdates#enabled}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_dependabot_security_updates#repository RepositoryDependabotSecurityUpdates#repository}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_dependabot_security_updates#id RepositoryDependabotSecurityUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



