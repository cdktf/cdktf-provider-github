# `data_github_organization_ip_allow_list`

Refer to the Terraform Registory for docs: [`data_github_organization_ip_allow_list`](https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/organization_ip_allow_list).

# `dataGithubOrganizationIpAllowList` Submodule <a name="`dataGithubOrganizationIpAllowList` Submodule" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubOrganizationIpAllowList <a name="DataGithubOrganizationIpAllowList" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/organization_ip_allow_list github_organization_ip_allow_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer"></a>

```typescript
import { dataGithubOrganizationIpAllowList } from '@cdktf/provider-github'

new dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList(scope: Construct, id: string, config?: DataGithubOrganizationIpAllowListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig">DataGithubOrganizationIpAllowListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig">DataGithubOrganizationIpAllowListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct"></a>

```typescript
import { dataGithubOrganizationIpAllowList } from '@cdktf/provider-github'

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement"></a>

```typescript
import { dataGithubOrganizationIpAllowList } from '@cdktf/provider-github'

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource"></a>

```typescript
import { dataGithubOrganizationIpAllowList } from '@cdktf/provider-github'

dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.ipAllowList">ipAllowList</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList">DataGithubOrganizationIpAllowListIpAllowListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ipAllowList`<sup>Required</sup> <a name="ipAllowList" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.ipAllowList"></a>

```typescript
public readonly ipAllowList: DataGithubOrganizationIpAllowListIpAllowListStructList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList">DataGithubOrganizationIpAllowListIpAllowListStructList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubOrganizationIpAllowListConfig <a name="DataGithubOrganizationIpAllowListConfig" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.Initializer"></a>

```typescript
import { dataGithubOrganizationIpAllowList } from '@cdktf/provider-github'

const dataGithubOrganizationIpAllowListConfig: dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/organization_ip_allow_list#id DataGithubOrganizationIpAllowList#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.28.1/docs/data-sources/organization_ip_allow_list#id DataGithubOrganizationIpAllowList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubOrganizationIpAllowListIpAllowListStruct <a name="DataGithubOrganizationIpAllowListIpAllowListStruct" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct.Initializer"></a>

```typescript
import { dataGithubOrganizationIpAllowList } from '@cdktf/provider-github'

const dataGithubOrganizationIpAllowListIpAllowListStruct: dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubOrganizationIpAllowListIpAllowListStructList <a name="DataGithubOrganizationIpAllowListIpAllowListStructList" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer"></a>

```typescript
import { dataGithubOrganizationIpAllowList } from '@cdktf/provider-github'

new dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.get"></a>

```typescript
public get(index: number): DataGithubOrganizationIpAllowListIpAllowListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubOrganizationIpAllowListIpAllowListStructOutputReference <a name="DataGithubOrganizationIpAllowListIpAllowListStructOutputReference" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer"></a>

```typescript
import { dataGithubOrganizationIpAllowList } from '@cdktf/provider-github'

new dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.allowListValue">allowListValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.isActive">isActive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct">DataGithubOrganizationIpAllowListIpAllowListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowListValue`<sup>Required</sup> <a name="allowListValue" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.allowListValue"></a>

```typescript
public readonly allowListValue: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.isActive"></a>

```typescript
public readonly isActive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubOrganizationIpAllowListIpAllowListStruct;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubOrganizationIpAllowList.DataGithubOrganizationIpAllowListIpAllowListStruct">DataGithubOrganizationIpAllowListIpAllowListStruct</a>

---



