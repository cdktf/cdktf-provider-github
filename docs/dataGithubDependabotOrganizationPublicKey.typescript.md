# `data_github_dependabot_organization_public_key`

Refer to the Terraform Registory for docs: [`data_github_dependabot_organization_public_key`](https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/dependabot_organization_public_key).

# `dataGithubDependabotOrganizationPublicKey` Submodule <a name="`dataGithubDependabotOrganizationPublicKey` Submodule" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubDependabotOrganizationPublicKey <a name="DataGithubDependabotOrganizationPublicKey" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/dependabot_organization_public_key github_dependabot_organization_public_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.Initializer"></a>

```typescript
import { dataGithubDependabotOrganizationPublicKey } from '@cdktf/provider-github'

new dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey(scope: Construct, id: string, config?: DataGithubDependabotOrganizationPublicKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig">DataGithubDependabotOrganizationPublicKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig">DataGithubDependabotOrganizationPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isConstruct"></a>

```typescript
import { dataGithubDependabotOrganizationPublicKey } from '@cdktf/provider-github'

dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isTerraformElement"></a>

```typescript
import { dataGithubDependabotOrganizationPublicKey } from '@cdktf/provider-github'

dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isTerraformDataSource"></a>

```typescript
import { dataGithubDependabotOrganizationPublicKey } from '@cdktf/provider-github'

dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubDependabotOrganizationPublicKeyConfig <a name="DataGithubDependabotOrganizationPublicKeyConfig" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.Initializer"></a>

```typescript
import { dataGithubDependabotOrganizationPublicKey } from '@cdktf/provider-github'

const dataGithubDependabotOrganizationPublicKeyConfig: dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/dependabot_organization_public_key#id DataGithubDependabotOrganizationPublicKey#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubDependabotOrganizationPublicKey.DataGithubDependabotOrganizationPublicKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.25.0/docs/data-sources/dependabot_organization_public_key#id DataGithubDependabotOrganizationPublicKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



