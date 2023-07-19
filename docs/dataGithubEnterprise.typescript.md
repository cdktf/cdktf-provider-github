# `data_github_enterprise`

Refer to the Terraform Registory for docs: [`data_github_enterprise`](https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/enterprise).

# `dataGithubEnterprise` Submodule <a name="`dataGithubEnterprise` Submodule" id="@cdktf/provider-github.dataGithubEnterprise"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubEnterprise <a name="DataGithubEnterprise" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/enterprise github_enterprise}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.Initializer"></a>

```typescript
import { dataGithubEnterprise } from '@cdktf/provider-github'

new dataGithubEnterprise.DataGithubEnterprise(scope: Construct, id: string, config: DataGithubEnterpriseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig">DataGithubEnterpriseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig">DataGithubEnterpriseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.isConstruct"></a>

```typescript
import { dataGithubEnterprise } from '@cdktf/provider-github'

dataGithubEnterprise.DataGithubEnterprise.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.isTerraformElement"></a>

```typescript
import { dataGithubEnterprise } from '@cdktf/provider-github'

dataGithubEnterprise.DataGithubEnterprise.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.isTerraformDataSource"></a>

```typescript
import { dataGithubEnterprise } from '@cdktf/provider-github'

dataGithubEnterprise.DataGithubEnterprise.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.slugInput">slugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.slug">slug</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `slugInput`<sup>Optional</sup> <a name="slugInput" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.slugInput"></a>

```typescript
public readonly slugInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterprise.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubEnterpriseConfig <a name="DataGithubEnterpriseConfig" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.Initializer"></a>

```typescript
import { dataGithubEnterprise } from '@cdktf/provider-github'

const dataGithubEnterpriseConfig: dataGithubEnterprise.DataGithubEnterpriseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.slug">slug</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/enterprise#slug DataGithubEnterprise#slug}. |
| <code><a href="#@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/enterprise#id DataGithubEnterprise#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/enterprise#slug DataGithubEnterprise#slug}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubEnterprise.DataGithubEnterpriseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/enterprise#id DataGithubEnterprise#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



