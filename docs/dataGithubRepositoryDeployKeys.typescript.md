# `data_github_repository_deploy_keys`

Refer to the Terraform Registory for docs: [`data_github_repository_deploy_keys`](https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/repository_deploy_keys).

# `dataGithubRepositoryDeployKeys` Submodule <a name="`dataGithubRepositoryDeployKeys` Submodule" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubRepositoryDeployKeys <a name="DataGithubRepositoryDeployKeys" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/repository_deploy_keys github_repository_deploy_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer"></a>

```typescript
import { dataGithubRepositoryDeployKeys } from '@cdktf/provider-github'

new dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys(scope: Construct, id: string, config: DataGithubRepositoryDeployKeysConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig">DataGithubRepositoryDeployKeysConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig">DataGithubRepositoryDeployKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isConstruct"></a>

```typescript
import { dataGithubRepositoryDeployKeys } from '@cdktf/provider-github'

dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformElement"></a>

```typescript
import { dataGithubRepositoryDeployKeys } from '@cdktf/provider-github'

dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformDataSource"></a>

```typescript
import { dataGithubRepositoryDeployKeys } from '@cdktf/provider-github'

dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.keys">keys</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList">DataGithubRepositoryDeployKeysKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.keys"></a>

```typescript
public readonly keys: DataGithubRepositoryDeployKeysKeysList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList">DataGithubRepositoryDeployKeysKeysList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeys.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubRepositoryDeployKeysConfig <a name="DataGithubRepositoryDeployKeysConfig" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.Initializer"></a>

```typescript
import { dataGithubRepositoryDeployKeys } from '@cdktf/provider-github'

const dataGithubRepositoryDeployKeysConfig: dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/repository_deploy_keys#repository DataGithubRepositoryDeployKeys#repository}. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/repository_deploy_keys#id DataGithubRepositoryDeployKeys#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/repository_deploy_keys#repository DataGithubRepositoryDeployKeys#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.35.0/docs/data-sources/repository_deploy_keys#id DataGithubRepositoryDeployKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubRepositoryDeployKeysKeys <a name="DataGithubRepositoryDeployKeysKeys" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeys.Initializer"></a>

```typescript
import { dataGithubRepositoryDeployKeys } from '@cdktf/provider-github'

const dataGithubRepositoryDeployKeysKeys: dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeys = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubRepositoryDeployKeysKeysList <a name="DataGithubRepositoryDeployKeysKeysList" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer"></a>

```typescript
import { dataGithubRepositoryDeployKeys } from '@cdktf/provider-github'

new dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.get"></a>

```typescript
public get(index: number): DataGithubRepositoryDeployKeysKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubRepositoryDeployKeysKeysOutputReference <a name="DataGithubRepositoryDeployKeysKeysOutputReference" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer"></a>

```typescript
import { dataGithubRepositoryDeployKeys } from '@cdktf/provider-github'

new dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.verified">verified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeys">DataGithubRepositoryDeployKeysKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.verified"></a>

```typescript
public readonly verified: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubRepositoryDeployKeysKeys;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubRepositoryDeployKeys.DataGithubRepositoryDeployKeysKeys">DataGithubRepositoryDeployKeysKeys</a>

---



