# `dataGithubRepositoryPullRequest` Submodule <a name="`dataGithubRepositoryPullRequest` Submodule" id="@cdktf/provider-github.dataGithubRepositoryPullRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryPullRequest <a name="DataGithubRepositoryPullRequest" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request github_repository_pull_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer"></a>

```typescript
import { dataGithubRepositoryPullRequest } from '@cdktf/provider-github'

new dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest(scope: Construct, id: string, config: DataGithubRepositoryPullRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig">DataGithubRepositoryPullRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig">DataGithubRepositoryPullRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.resetOwner"></a>

```typescript
public resetOwner(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGithubRepositoryPullRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isConstruct"></a>

```typescript
import { dataGithubRepositoryPullRequest } from '@cdktf/provider-github'

dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformElement"></a>

```typescript
import { dataGithubRepositoryPullRequest } from '@cdktf/provider-github'

dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformDataSource"></a>

```typescript
import { dataGithubRepositoryPullRequest } from '@cdktf/provider-github'

dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport"></a>

```typescript
import { dataGithubRepositoryPullRequest } from '@cdktf/provider-github'

dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGithubRepositoryPullRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGithubRepositoryPullRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGithubRepositoryPullRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGithubRepositoryPullRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRef">baseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseSha">baseSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.draft">draft</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headOwner">headOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headRef">headRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headRepository">headRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headSha">headSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.maintainerCanModify">maintainerCanModify</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.openedAt">openedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.openedBy">openedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRepositoryInput">baseRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.numberInput">numberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRepository">baseRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRef"></a>

```typescript
public readonly baseRef: string;
```

- *Type:* string

---

##### `baseSha`<sup>Required</sup> <a name="baseSha" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseSha"></a>

```typescript
public readonly baseSha: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.draft"></a>

```typescript
public readonly draft: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `headOwner`<sup>Required</sup> <a name="headOwner" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headOwner"></a>

```typescript
public readonly headOwner: string;
```

- *Type:* string

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headRef"></a>

```typescript
public readonly headRef: string;
```

- *Type:* string

---

##### `headRepository`<sup>Required</sup> <a name="headRepository" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headRepository"></a>

```typescript
public readonly headRepository: string;
```

- *Type:* string

---

##### `headSha`<sup>Required</sup> <a name="headSha" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.headSha"></a>

```typescript
public readonly headSha: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `maintainerCanModify`<sup>Required</sup> <a name="maintainerCanModify" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.maintainerCanModify"></a>

```typescript
public readonly maintainerCanModify: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `openedAt`<sup>Required</sup> <a name="openedAt" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.openedAt"></a>

```typescript
public readonly openedAt: number;
```

- *Type:* number

---

##### `openedBy`<sup>Required</sup> <a name="openedBy" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.openedBy"></a>

```typescript
public readonly openedBy: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `baseRepositoryInput`<sup>Optional</sup> <a name="baseRepositoryInput" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRepositoryInput"></a>

```typescript
public readonly baseRepositoryInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.numberInput"></a>

```typescript
public readonly numberInput: number;
```

- *Type:* number

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `baseRepository`<sup>Required</sup> <a name="baseRepository" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.baseRepository"></a>

```typescript
public readonly baseRepository: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryPullRequestConfig <a name="DataGithubRepositoryPullRequestConfig" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.Initializer"></a>

```typescript
import { dataGithubRepositoryPullRequest } from '@cdktf/provider-github'

const dataGithubRepositoryPullRequestConfig: dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.baseRepository">baseRepository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request#base_repository DataGithubRepositoryPullRequest#base_repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.number">number</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request#number DataGithubRepositoryPullRequest#number}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request#id DataGithubRepositoryPullRequest#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request#owner DataGithubRepositoryPullRequest#owner}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseRepository`<sup>Required</sup> <a name="baseRepository" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.baseRepository"></a>

```typescript
public readonly baseRepository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request#base_repository DataGithubRepositoryPullRequest#base_repository}.

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request#number DataGithubRepositoryPullRequest#number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request#id DataGithubRepositoryPullRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.dataGithubRepositoryPullRequest.DataGithubRepositoryPullRequestConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.2/docs/data-sources/repository_pull_request#owner DataGithubRepositoryPullRequest#owner}.

---



