# `data_github_actions_organization_secrets`

Refer to the Terraform Registory for docs: [`data_github_actions_organization_secrets`](https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_secrets).

# `dataGithubActionsOrganizationSecrets` Submodule <a name="`dataGithubActionsOrganizationSecrets` Submodule" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubActionsOrganizationSecrets <a name="DataGithubActionsOrganizationSecrets" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_secrets github_actions_organization_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.Initializer"></a>

```typescript
import { dataGithubActionsOrganizationSecrets } from '@cdktf/provider-github'

new dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets(scope: Construct, id: string, config?: DataGithubActionsOrganizationSecretsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig">DataGithubActionsOrganizationSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig">DataGithubActionsOrganizationSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isConstruct"></a>

```typescript
import { dataGithubActionsOrganizationSecrets } from '@cdktf/provider-github'

dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isTerraformElement"></a>

```typescript
import { dataGithubActionsOrganizationSecrets } from '@cdktf/provider-github'

dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isTerraformDataSource"></a>

```typescript
import { dataGithubActionsOrganizationSecrets } from '@cdktf/provider-github'

dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList">DataGithubActionsOrganizationSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.secrets"></a>

```typescript
public readonly secrets: DataGithubActionsOrganizationSecretsSecretsList;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList">DataGithubActionsOrganizationSecretsSecretsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecrets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubActionsOrganizationSecretsConfig <a name="DataGithubActionsOrganizationSecretsConfig" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.Initializer"></a>

```typescript
import { dataGithubActionsOrganizationSecrets } from '@cdktf/provider-github'

const dataGithubActionsOrganizationSecretsConfig: dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_secrets#id DataGithubActionsOrganizationSecrets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.30.1/docs/data-sources/actions_organization_secrets#id DataGithubActionsOrganizationSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubActionsOrganizationSecretsSecrets <a name="DataGithubActionsOrganizationSecretsSecrets" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecrets.Initializer"></a>

```typescript
import { dataGithubActionsOrganizationSecrets } from '@cdktf/provider-github'

const dataGithubActionsOrganizationSecretsSecrets: dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecrets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubActionsOrganizationSecretsSecretsList <a name="DataGithubActionsOrganizationSecretsSecretsList" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.Initializer"></a>

```typescript
import { dataGithubActionsOrganizationSecrets } from '@cdktf/provider-github'

new dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.get"></a>

```typescript
public get(index: number): DataGithubActionsOrganizationSecretsSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGithubActionsOrganizationSecretsSecretsOutputReference <a name="DataGithubActionsOrganizationSecretsSecretsOutputReference" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.Initializer"></a>

```typescript
import { dataGithubActionsOrganizationSecrets } from '@cdktf/provider-github'

new dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecrets">DataGithubActionsOrganizationSecretsSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecretsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGithubActionsOrganizationSecretsSecrets;
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationSecrets.DataGithubActionsOrganizationSecretsSecrets">DataGithubActionsOrganizationSecretsSecrets</a>

---



