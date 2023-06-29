# `data_github_repository_branches`

Refer to the Terraform Registory for docs: [`data_github_repository_branches`](https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches).

# `dataGithubRepositoryBranches` Submodule <a name="`dataGithubRepositoryBranches` Submodule" id="@cdktf/provider-github.dataGithubRepositoryBranches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryBranches <a name="DataGithubRepositoryBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches github_repository_branches}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer"></a>

```typescript
import { dataGithubRepositoryBranches } from '@cdktf/provider-github'

new dataGithubRepositoryBranches.DataGithubRepositoryBranches(scope: Construct, id: string, config: DataGithubRepositoryBranchesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig">DataGithubRepositoryBranchesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig">DataGithubRepositoryBranchesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOnlyNonProtectedBranches">resetOnlyNonProtectedBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOnlyProtectedBranches">resetOnlyProtectedBranches</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOnlyNonProtectedBranches` <a name="resetOnlyNonProtectedBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOnlyNonProtectedBranches"></a>

```typescript
public resetOnlyNonProtectedBranches(): void
```

##### `resetOnlyProtectedBranches` <a name="resetOnlyProtectedBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.resetOnlyProtectedBranches"></a>

```typescript
public resetOnlyProtectedBranches(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isConstruct"></a>

```typescript
import { dataGithubRepositoryBranches } from '@cdktf/provider-github'

dataGithubRepositoryBranches.DataGithubRepositoryBranches.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformElement"></a>

```typescript
import { dataGithubRepositoryBranches } from '@cdktf/provider-github'

dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformDataSource"></a>

```typescript
import { dataGithubRepositoryBranches } from '@cdktf/provider-github'

dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.branches">branches</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList">DataGithubRepositoryBranchesBranchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyNonProtectedBranchesInput">onlyNonProtectedBranchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyProtectedBranchesInput">onlyProtectedBranchesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyNonProtectedBranches">onlyNonProtectedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyProtectedBranches">onlyProtectedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.branches"></a>

```typescript
public readonly branches: DataGithubRepositoryBranchesBranchesList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList">DataGithubRepositoryBranchesBranchesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onlyNonProtectedBranchesInput`<sup>Optional</sup> <a name="onlyNonProtectedBranchesInput" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyNonProtectedBranchesInput"></a>

```typescript
public readonly onlyNonProtectedBranchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlyProtectedBranchesInput`<sup>Optional</sup> <a name="onlyProtectedBranchesInput" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyProtectedBranchesInput"></a>

```typescript
public readonly onlyProtectedBranchesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `onlyNonProtectedBranches`<sup>Required</sup> <a name="onlyNonProtectedBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyNonProtectedBranches"></a>

```typescript
public readonly onlyNonProtectedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `onlyProtectedBranches`<sup>Required</sup> <a name="onlyProtectedBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.onlyProtectedBranches"></a>

```typescript
public readonly onlyProtectedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranches.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryBranchesBranches <a name="DataGithubRepositoryBranchesBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches.Initializer"></a>

```typescript
import { dataGithubRepositoryBranches } from '@cdktf/provider-github'

const dataGithubRepositoryBranchesBranches: dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches = { ... }
```


### DataGithubRepositoryBranchesConfig <a name="DataGithubRepositoryBranchesConfig" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.Initializer"></a>

```typescript
import { dataGithubRepositoryBranches } from '@cdktf/provider-github'

const dataGithubRepositoryBranchesConfig: dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches#repository DataGithubRepositoryBranches#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches#id DataGithubRepositoryBranches#id}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.onlyNonProtectedBranches">onlyNonProtectedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches#only_non_protected_branches DataGithubRepositoryBranches#only_non_protected_branches}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.onlyProtectedBranches">onlyProtectedBranches</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches#only_protected_branches DataGithubRepositoryBranches#only_protected_branches}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches#repository DataGithubRepositoryBranches#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches#id DataGithubRepositoryBranches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onlyNonProtectedBranches`<sup>Optional</sup> <a name="onlyNonProtectedBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.onlyNonProtectedBranches"></a>

```typescript
public readonly onlyNonProtectedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches#only_non_protected_branches DataGithubRepositoryBranches#only_non_protected_branches}.

---

##### `onlyProtectedBranches`<sup>Optional</sup> <a name="onlyProtectedBranches" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesConfig.property.onlyProtectedBranches"></a>

```typescript
public readonly onlyProtectedBranches: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.29.0/docs/data-sources/repository_branches#only_protected_branches DataGithubRepositoryBranches#only_protected_branches}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryBranchesBranchesList <a name="DataGithubRepositoryBranchesBranchesList" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer"></a>

```typescript
import { dataGithubRepositoryBranches } from '@cdktf/provider-github'

new dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.get"></a>

```typescript
public get(index: number): DataGithubRepositoryBranchesBranchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubRepositoryBranchesBranchesOutputReference <a name="DataGithubRepositoryBranchesBranchesOutputReference" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer"></a>

```typescript
import { dataGithubRepositoryBranches } from '@cdktf/provider-github'

new dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.protected">protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches">DataGithubRepositoryBranchesBranches</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protected`<sup>Required</sup> <a name="protected" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.protected"></a>

```typescript
public readonly protected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranchesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubRepositoryBranchesBranches;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryBranches.DataGithubRepositoryBranchesBranches">DataGithubRepositoryBranchesBranches</a>

---



