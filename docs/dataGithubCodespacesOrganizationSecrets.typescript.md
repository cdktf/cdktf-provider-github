# `data_github_codespaces_organization_secrets`

Refer to the Terraform Registory for docs: [`data_github_codespaces_organization_secrets`](https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/codespaces_organization_secrets).

# `dataGithubCodespacesOrganizationSecrets` Submodule <a name="`dataGithubCodespacesOrganizationSecrets` Submodule" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubCodespacesOrganizationSecrets <a name="DataGithubCodespacesOrganizationSecrets" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/codespaces_organization_secrets github_codespaces_organization_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.Initializer"></a>

```typescript
import { dataGithubCodespacesOrganizationSecrets } from '@cdktf/provider-github'

new dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets(scope: Construct, id: string, config?: DataGithubCodespacesOrganizationSecretsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig">DataGithubCodespacesOrganizationSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig">DataGithubCodespacesOrganizationSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isConstruct"></a>

```typescript
import { dataGithubCodespacesOrganizationSecrets } from '@cdktf/provider-github'

dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isTerraformElement"></a>

```typescript
import { dataGithubCodespacesOrganizationSecrets } from '@cdktf/provider-github'

dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isTerraformDataSource"></a>

```typescript
import { dataGithubCodespacesOrganizationSecrets } from '@cdktf/provider-github'

dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList">DataGithubCodespacesOrganizationSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.secrets"></a>

```typescript
public readonly secrets: DataGithubCodespacesOrganizationSecretsSecretsList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList">DataGithubCodespacesOrganizationSecretsSecretsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecrets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubCodespacesOrganizationSecretsConfig <a name="DataGithubCodespacesOrganizationSecretsConfig" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.Initializer"></a>

```typescript
import { dataGithubCodespacesOrganizationSecrets } from '@cdktf/provider-github'

const dataGithubCodespacesOrganizationSecretsConfig: dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/codespaces_organization_secrets#id DataGithubCodespacesOrganizationSecrets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/data-sources/codespaces_organization_secrets#id DataGithubCodespacesOrganizationSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubCodespacesOrganizationSecretsSecrets <a name="DataGithubCodespacesOrganizationSecretsSecrets" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecrets.Initializer"></a>

```typescript
import { dataGithubCodespacesOrganizationSecrets } from '@cdktf/provider-github'

const dataGithubCodespacesOrganizationSecretsSecrets: dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecrets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubCodespacesOrganizationSecretsSecretsList <a name="DataGithubCodespacesOrganizationSecretsSecretsList" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.Initializer"></a>

```typescript
import { dataGithubCodespacesOrganizationSecrets } from '@cdktf/provider-github'

new dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.get"></a>

```typescript
public get(index: number): DataGithubCodespacesOrganizationSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubCodespacesOrganizationSecretsSecretsOutputReference <a name="DataGithubCodespacesOrganizationSecretsSecretsOutputReference" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.Initializer"></a>

```typescript
import { dataGithubCodespacesOrganizationSecrets } from '@cdktf/provider-github'

new dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecrets">DataGithubCodespacesOrganizationSecretsSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubCodespacesOrganizationSecretsSecrets;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubCodespacesOrganizationSecrets.DataGithubCodespacesOrganizationSecretsSecrets">DataGithubCodespacesOrganizationSecretsSecrets</a>

---



