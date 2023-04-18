# `data_github_actions_organization_public_key`

Refer to the Terraform Registory for docs: [`data_github_actions_organization_public_key`](https://www.terraform.io/docs/providers/github/d/actions_organization_public_key).

# `dataGithubActionsOrganizationPublicKey` Submodule <a name="`dataGithubActionsOrganizationPublicKey` Submodule" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubActionsOrganizationPublicKey <a name="DataGithubActionsOrganizationPublicKey" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/d/actions_organization_public_key github_actions_organization_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.Initializer"></a>

```typescript
import { dataGithubActionsOrganizationPublicKey } from '@cdktf/provider-github'

new dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey(scope: Construct, id: string, config?: DataGithubActionsOrganizationPublicKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig">DataGithubActionsOrganizationPublicKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig">DataGithubActionsOrganizationPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isConstruct"></a>

```typescript
import { dataGithubActionsOrganizationPublicKey } from '@cdktf/provider-github'

dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isTerraformElement"></a>

```typescript
import { dataGithubActionsOrganizationPublicKey } from '@cdktf/provider-github'

dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isTerraformDataSource"></a>

```typescript
import { dataGithubActionsOrganizationPublicKey } from '@cdktf/provider-github'

dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubActionsOrganizationPublicKeyConfig <a name="DataGithubActionsOrganizationPublicKeyConfig" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.Initializer"></a>

```typescript
import { dataGithubActionsOrganizationPublicKey } from '@cdktf/provider-github'

const dataGithubActionsOrganizationPublicKeyConfig: dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/actions_organization_public_key#id DataGithubActionsOrganizationPublicKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationPublicKey.DataGithubActionsOrganizationPublicKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/actions_organization_public_key#id DataGithubActionsOrganizationPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



