# `repositoryAutolinkReference` Submodule <a name="`repositoryAutolinkReference` Submodule" id="@cdktf/provider-github.repositoryAutolinkReference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryAutolinkReference <a name="RepositoryAutolinkReference" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_autolink_reference github_repository_autolink_reference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer"></a>

```typescript
import { repositoryAutolinkReference } from '@cdktf/provider-github'

new repositoryAutolinkReference.RepositoryAutolinkReference(scope: Construct, id: string, config: RepositoryAutolinkReferenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig">RepositoryAutolinkReferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig">RepositoryAutolinkReferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetIsAlphanumeric">resetIsAlphanumeric</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAlphanumeric` <a name="resetIsAlphanumeric" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.resetIsAlphanumeric"></a>

```typescript
public resetIsAlphanumeric(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryAutolinkReference resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct"></a>

```typescript
import { repositoryAutolinkReference } from '@cdktf/provider-github'

repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement"></a>

```typescript
import { repositoryAutolinkReference } from '@cdktf/provider-github'

repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource"></a>

```typescript
import { repositoryAutolinkReference } from '@cdktf/provider-github'

repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport"></a>

```typescript
import { repositoryAutolinkReference } from '@cdktf/provider-github'

repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RepositoryAutolinkReference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryAutolinkReference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryAutolinkReference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_autolink_reference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryAutolinkReference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumericInput">isAlphanumericInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefixInput">keyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplateInput">targetUrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumeric">isAlphanumeric</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplate">targetUrlTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAlphanumericInput`<sup>Optional</sup> <a name="isAlphanumericInput" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumericInput"></a>

```typescript
public readonly isAlphanumericInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyPrefixInput`<sup>Optional</sup> <a name="keyPrefixInput" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefixInput"></a>

```typescript
public readonly keyPrefixInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `targetUrlTemplateInput`<sup>Optional</sup> <a name="targetUrlTemplateInput" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplateInput"></a>

```typescript
public readonly targetUrlTemplateInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAlphanumeric`<sup>Required</sup> <a name="isAlphanumeric" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.isAlphanumeric"></a>

```typescript
public readonly isAlphanumeric: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `targetUrlTemplate`<sup>Required</sup> <a name="targetUrlTemplate" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.targetUrlTemplate"></a>

```typescript
public readonly targetUrlTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReference.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryAutolinkReferenceConfig <a name="RepositoryAutolinkReferenceConfig" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.Initializer"></a>

```typescript
import { repositoryAutolinkReference } from '@cdktf/provider-github'

const repositoryAutolinkReferenceConfig: repositoryAutolinkReference.RepositoryAutolinkReferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.keyPrefix">keyPrefix</a></code> | <code>string</code> | This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.repository">repository</a></code> | <code>string</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.targetUrlTemplate">targetUrlTemplate</a></code> | <code>string</code> | The template of the target URL used for the links; |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}. |
| <code><a href="#@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.isAlphanumeric">isAlphanumeric</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `keyPrefix`<sup>Required</sup> <a name="keyPrefix" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.keyPrefix"></a>

```typescript
public readonly keyPrefix: string;
```

- *Type:* string

This prefix appended by a number will generate a link any time it is found in an issue, pull request, or commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_autolink_reference#key_prefix RepositoryAutolinkReference#key_prefix}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_autolink_reference#repository RepositoryAutolinkReference#repository}

---

##### `targetUrlTemplate`<sup>Required</sup> <a name="targetUrlTemplate" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.targetUrlTemplate"></a>

```typescript
public readonly targetUrlTemplate: string;
```

- *Type:* string

The template of the target URL used for the links;

must be a valid URL and contain `<num>` for the reference number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_autolink_reference#target_url_template RepositoryAutolinkReference#target_url_template}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_autolink_reference#id RepositoryAutolinkReference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAlphanumeric`<sup>Optional</sup> <a name="isAlphanumeric" id="@cdktf/provider-github.repositoryAutolinkReference.RepositoryAutolinkReferenceConfig.property.isAlphanumeric"></a>

```typescript
public readonly isAlphanumeric: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this autolink reference matches alphanumeric characters. If false, this autolink reference only matches numeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.0/docs/resources/repository_autolink_reference#is_alphanumeric RepositoryAutolinkReference#is_alphanumeric}

---



