# `repositoryFile` Submodule <a name="`repositoryFile` Submodule" id="@cdktf/provider-github.repositoryFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryFile <a name="RepositoryFile" id="@cdktf/provider-github.repositoryFile.RepositoryFile"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file github_repository_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-github'

new repositoryFile.RepositoryFile(scope: Construct, id: string, config: RepositoryFileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig">RepositoryFileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryFile.RepositoryFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig">RepositoryFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranch">resetAutocreateBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranchSourceBranch">resetAutocreateBranchSourceBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranchSourceSha">resetAutocreateBranchSourceSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitAuthor">resetCommitAuthor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitEmail">resetCommitEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitMessage">resetCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverwriteOnCreate">resetOverwriteOnCreate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryFile.RepositoryFile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryFile.RepositoryFile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.repositoryFile.RepositoryFile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.repositoryFile.RepositoryFile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryFile.RepositoryFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutocreateBranch` <a name="resetAutocreateBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranch"></a>

```typescript
public resetAutocreateBranch(): void
```

##### `resetAutocreateBranchSourceBranch` <a name="resetAutocreateBranchSourceBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranchSourceBranch"></a>

```typescript
public resetAutocreateBranchSourceBranch(): void
```

##### `resetAutocreateBranchSourceSha` <a name="resetAutocreateBranchSourceSha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetAutocreateBranchSourceSha"></a>

```typescript
public resetAutocreateBranchSourceSha(): void
```

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCommitAuthor` <a name="resetCommitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitAuthor"></a>

```typescript
public resetCommitAuthor(): void
```

##### `resetCommitEmail` <a name="resetCommitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitEmail"></a>

```typescript
public resetCommitEmail(): void
```

##### `resetCommitMessage` <a name="resetCommitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetCommitMessage"></a>

```typescript
public resetCommitMessage(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOverwriteOnCreate` <a name="resetOverwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFile.resetOverwriteOnCreate"></a>

```typescript
public resetOverwriteOnCreate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-github'

repositoryFile.RepositoryFile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-github'

repositoryFile.RepositoryFile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-github'

repositoryFile.RepositoryFile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryFile.RepositoryFile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-github'

repositoryFile.RepositoryFile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RepositoryFile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryFile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryFile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryFile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitSha">commitSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.ref">ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.sha">sha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchInput">autocreateBranchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceBranchInput">autocreateBranchSourceBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceShaInput">autocreateBranchSourceShaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthorInput">commitAuthorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmailInput">commitEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessageInput">commitMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreateInput">overwriteOnCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranch">autocreateBranch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceBranch">autocreateBranchSourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceSha">autocreateBranchSourceSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthor">commitAuthor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmail">commitEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessage">commitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreate">overwriteOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `commitSha`<sup>Required</sup> <a name="commitSha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitSha"></a>

```typescript
public readonly commitSha: string;
```

- *Type:* string

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

---

##### `sha`<sup>Required</sup> <a name="sha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.sha"></a>

```typescript
public readonly sha: string;
```

- *Type:* string

---

##### `autocreateBranchInput`<sup>Optional</sup> <a name="autocreateBranchInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchInput"></a>

```typescript
public readonly autocreateBranchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autocreateBranchSourceBranchInput`<sup>Optional</sup> <a name="autocreateBranchSourceBranchInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceBranchInput"></a>

```typescript
public readonly autocreateBranchSourceBranchInput: string;
```

- *Type:* string

---

##### `autocreateBranchSourceShaInput`<sup>Optional</sup> <a name="autocreateBranchSourceShaInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceShaInput"></a>

```typescript
public readonly autocreateBranchSourceShaInput: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `commitAuthorInput`<sup>Optional</sup> <a name="commitAuthorInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthorInput"></a>

```typescript
public readonly commitAuthorInput: string;
```

- *Type:* string

---

##### `commitEmailInput`<sup>Optional</sup> <a name="commitEmailInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmailInput"></a>

```typescript
public readonly commitEmailInput: string;
```

- *Type:* string

---

##### `commitMessageInput`<sup>Optional</sup> <a name="commitMessageInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessageInput"></a>

```typescript
public readonly commitMessageInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `overwriteOnCreateInput`<sup>Optional</sup> <a name="overwriteOnCreateInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreateInput"></a>

```typescript
public readonly overwriteOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `autocreateBranch`<sup>Required</sup> <a name="autocreateBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranch"></a>

```typescript
public readonly autocreateBranch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autocreateBranchSourceBranch`<sup>Required</sup> <a name="autocreateBranchSourceBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceBranch"></a>

```typescript
public readonly autocreateBranchSourceBranch: string;
```

- *Type:* string

---

##### `autocreateBranchSourceSha`<sup>Required</sup> <a name="autocreateBranchSourceSha" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.autocreateBranchSourceSha"></a>

```typescript
public readonly autocreateBranchSourceSha: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commitAuthor`<sup>Required</sup> <a name="commitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitAuthor"></a>

```typescript
public readonly commitAuthor: string;
```

- *Type:* string

---

##### `commitEmail`<sup>Required</sup> <a name="commitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitEmail"></a>

```typescript
public readonly commitEmail: string;
```

- *Type:* string

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `overwriteOnCreate`<sup>Required</sup> <a name="overwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.overwriteOnCreate"></a>

```typescript
public readonly overwriteOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryFile.RepositoryFile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryFileConfig <a name="RepositoryFileConfig" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.Initializer"></a>

```typescript
import { repositoryFile } from '@cdktf/provider-github'

const repositoryFileConfig: repositoryFile.RepositoryFileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.content">content</a></code> | <code>string</code> | The file's content. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.file">file</a></code> | <code>string</code> | The file path to manage. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.repository">repository</a></code> | <code>string</code> | The repository name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranch">autocreateBranch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Automatically create the branch if it could not be found. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranchSourceBranch">autocreateBranchSourceBranch</a></code> | <code>string</code> | The branch name to start from, if 'autocreate_branch' is set. Defaults to 'main'. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranchSourceSha">autocreateBranchSourceSha</a></code> | <code>string</code> | The commit hash to start from, if 'autocreate_branch' is set. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.branch">branch</a></code> | <code>string</code> | The branch name, defaults to the repository's default branch. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitAuthor">commitAuthor</a></code> | <code>string</code> | The commit author name, defaults to the authenticated user's name. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitEmail">commitEmail</a></code> | <code>string</code> | The commit author email address, defaults to the authenticated user's email address. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitMessage">commitMessage</a></code> | <code>string</code> | The commit message when creating, updating or deleting the file. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#id RepositoryFile#id}. |
| <code><a href="#@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate">overwriteOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable overwriting existing files, defaults to "false". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The file's content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#content RepositoryFile#content}

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

The file path to manage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#file RepositoryFile#file}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#repository RepositoryFile#repository}

---

##### `autocreateBranch`<sup>Optional</sup> <a name="autocreateBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranch"></a>

```typescript
public readonly autocreateBranch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Automatically create the branch if it could not be found.

Subsequent reads if the branch is deleted will occur from 'autocreate_branch_source_branch'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#autocreate_branch RepositoryFile#autocreate_branch}

---

##### `autocreateBranchSourceBranch`<sup>Optional</sup> <a name="autocreateBranchSourceBranch" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranchSourceBranch"></a>

```typescript
public readonly autocreateBranchSourceBranch: string;
```

- *Type:* string

The branch name to start from, if 'autocreate_branch' is set. Defaults to 'main'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#autocreate_branch_source_branch RepositoryFile#autocreate_branch_source_branch}

---

##### `autocreateBranchSourceSha`<sup>Optional</sup> <a name="autocreateBranchSourceSha" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.autocreateBranchSourceSha"></a>

```typescript
public readonly autocreateBranchSourceSha: string;
```

- *Type:* string

The commit hash to start from, if 'autocreate_branch' is set.

Defaults to the tip of 'autocreate_branch_source_branch'. If provided, 'autocreate_branch_source_branch' is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#autocreate_branch_source_sha RepositoryFile#autocreate_branch_source_sha}

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The branch name, defaults to the repository's default branch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#branch RepositoryFile#branch}

---

##### `commitAuthor`<sup>Optional</sup> <a name="commitAuthor" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitAuthor"></a>

```typescript
public readonly commitAuthor: string;
```

- *Type:* string

The commit author name, defaults to the authenticated user's name.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#commit_author RepositoryFile#commit_author}

---

##### `commitEmail`<sup>Optional</sup> <a name="commitEmail" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitEmail"></a>

```typescript
public readonly commitEmail: string;
```

- *Type:* string

The commit author email address, defaults to the authenticated user's email address.

GitHub app users may omit author and email information so GitHub can verify commits as the GitHub App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#commit_email RepositoryFile#commit_email}

---

##### `commitMessage`<sup>Optional</sup> <a name="commitMessage" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

The commit message when creating, updating or deleting the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#commit_message RepositoryFile#commit_message}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#id RepositoryFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwriteOnCreate`<sup>Optional</sup> <a name="overwriteOnCreate" id="@cdktf/provider-github.repositoryFile.RepositoryFileConfig.property.overwriteOnCreate"></a>

```typescript
public readonly overwriteOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable overwriting existing files, defaults to "false".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.7.3/docs/resources/repository_file#overwrite_on_create RepositoryFile#overwrite_on_create}

---



