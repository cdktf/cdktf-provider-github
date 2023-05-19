# `github_repository_pull_request`

Refer to the Terraform Registory for docs: [`github_repository_pull_request`](https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request).

# `repositoryPullRequest` Submodule <a name="`repositoryPullRequest` Submodule" id="@cdktf/provider-github.repositoryPullRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryPullRequest <a name="RepositoryPullRequest" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request github_repository_pull_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer"></a>

```typescript
import { repositoryPullRequest } from '@cdktf/provider-github'

new repositoryPullRequest.RepositoryPullRequest(scope: Construct, id: string, config: RepositoryPullRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig">RepositoryPullRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig">RepositoryPullRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify">resetMaintainerCanModify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner">resetOwner</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaintainerCanModify` <a name="resetMaintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetMaintainerCanModify"></a>

```typescript
public resetMaintainerCanModify(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.resetOwner"></a>

```typescript
public resetOwner(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct"></a>

```typescript
import { repositoryPullRequest } from '@cdktf/provider-github'

repositoryPullRequest.RepositoryPullRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement"></a>

```typescript
import { repositoryPullRequest } from '@cdktf/provider-github'

repositoryPullRequest.RepositoryPullRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource"></a>

```typescript
import { repositoryPullRequest } from '@cdktf/provider-github'

repositoryPullRequest.RepositoryPullRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha">baseSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft">draft</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha">headSha</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt">openedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy">openedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput">baseRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput">baseRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput">headRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput">maintainerCanModifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef">baseRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository">baseRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef">headRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify">maintainerCanModify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseSha`<sup>Required</sup> <a name="baseSha" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseSha"></a>

```typescript
public readonly baseSha: string;
```

- *Type:* string

---

##### `draft`<sup>Required</sup> <a name="draft" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.draft"></a>

```typescript
public readonly draft: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `headSha`<sup>Required</sup> <a name="headSha" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headSha"></a>

```typescript
public readonly headSha: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `openedAt`<sup>Required</sup> <a name="openedAt" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedAt"></a>

```typescript
public readonly openedAt: number;
```

- *Type:* number

---

##### `openedBy`<sup>Required</sup> <a name="openedBy" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.openedBy"></a>

```typescript
public readonly openedBy: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `baseRefInput`<sup>Optional</sup> <a name="baseRefInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRefInput"></a>

```typescript
public readonly baseRefInput: string;
```

- *Type:* string

---

##### `baseRepositoryInput`<sup>Optional</sup> <a name="baseRepositoryInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepositoryInput"></a>

```typescript
public readonly baseRepositoryInput: string;
```

- *Type:* string

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `headRefInput`<sup>Optional</sup> <a name="headRefInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRefInput"></a>

```typescript
public readonly headRefInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maintainerCanModifyInput`<sup>Optional</sup> <a name="maintainerCanModifyInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModifyInput"></a>

```typescript
public readonly maintainerCanModifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRef"></a>

```typescript
public readonly baseRef: string;
```

- *Type:* string

---

##### `baseRepository`<sup>Required</sup> <a name="baseRepository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.baseRepository"></a>

```typescript
public readonly baseRepository: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.headRef"></a>

```typescript
public readonly headRef: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintainerCanModify`<sup>Required</sup> <a name="maintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.maintainerCanModify"></a>

```typescript
public readonly maintainerCanModify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryPullRequestConfig <a name="RepositoryPullRequestConfig" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.Initializer"></a>

```typescript
import { repositoryPullRequest } from '@cdktf/provider-github'

const repositoryPullRequestConfig: repositoryPullRequest.RepositoryPullRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef">baseRef</a></code> | <code>string</code> | Name of the branch serving as the base of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository">baseRepository</a></code> | <code>string</code> | Name of the base repository to retrieve the Pull Requests from. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef">headRef</a></code> | <code>string</code> | Name of the branch serving as the head of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title">title</a></code> | <code>string</code> | The title of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body">body</a></code> | <code>string</code> | Body of the Pull Request. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request#id RepositoryPullRequest#id}. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify">maintainerCanModify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'. |
| <code><a href="#@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner">owner</a></code> | <code>string</code> | Owner of the repository. If not provided, the provider's default owner is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `baseRef`<sup>Required</sup> <a name="baseRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRef"></a>

```typescript
public readonly baseRef: string;
```

- *Type:* string

Name of the branch serving as the base of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request#base_ref RepositoryPullRequest#base_ref}

---

##### `baseRepository`<sup>Required</sup> <a name="baseRepository" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.baseRepository"></a>

```typescript
public readonly baseRepository: string;
```

- *Type:* string

Name of the base repository to retrieve the Pull Requests from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request#base_repository RepositoryPullRequest#base_repository}

---

##### `headRef`<sup>Required</sup> <a name="headRef" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.headRef"></a>

```typescript
public readonly headRef: string;
```

- *Type:* string

Name of the branch serving as the head of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request#head_ref RepositoryPullRequest#head_ref}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request#title RepositoryPullRequest#title}

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Body of the Pull Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request#body RepositoryPullRequest#body}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request#id RepositoryPullRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintainerCanModify`<sup>Optional</sup> <a name="maintainerCanModify" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.maintainerCanModify"></a>

```typescript
public readonly maintainerCanModify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether the base repository maintainers can modify the Pull Request. Default: 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request#maintainer_can_modify RepositoryPullRequest#maintainer_can_modify}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-github.repositoryPullRequest.RepositoryPullRequestConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Owner of the repository. If not provided, the provider's default owner is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.1/docs/resources/repository_pull_request#owner RepositoryPullRequest#owner}

---



