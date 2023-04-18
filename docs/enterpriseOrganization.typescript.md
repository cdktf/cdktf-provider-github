# `github_enterprise_organization`

Refer to the Terraform Registory for docs: [`github_enterprise_organization`](https://www.terraform.io/docs/providers/github/r/enterprise_organization).

# `enterpriseOrganization` Submodule <a name="`enterpriseOrganization` Submodule" id="@cdktf/provider-github.enterpriseOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseOrganization <a name="EnterpriseOrganization" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization github_enterprise_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer"></a>

```typescript
import { enterpriseOrganization } from '@cdktf/provider-github'

new enterpriseOrganization.EnterpriseOrganization(scope: Construct, id: string, config: EnterpriseOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig">EnterpriseOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig">EnterpriseOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct"></a>

```typescript
import { enterpriseOrganization } from '@cdktf/provider-github'

enterpriseOrganization.EnterpriseOrganization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement"></a>

```typescript
import { enterpriseOrganization } from '@cdktf/provider-github'

enterpriseOrganization.EnterpriseOrganization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource"></a>

```typescript
import { enterpriseOrganization } from '@cdktf/provider-github'

enterpriseOrganization.EnterpriseOrganization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLoginsInput">adminLoginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmailInput">billingEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseIdInput">enterpriseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLogins">adminLogins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmail">billingEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseId">enterpriseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminLoginsInput`<sup>Optional</sup> <a name="adminLoginsInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLoginsInput"></a>

```typescript
public readonly adminLoginsInput: string[];
```

- *Type:* string[]

---

##### `billingEmailInput`<sup>Optional</sup> <a name="billingEmailInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmailInput"></a>

```typescript
public readonly billingEmailInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enterpriseIdInput`<sup>Optional</sup> <a name="enterpriseIdInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseIdInput"></a>

```typescript
public readonly enterpriseIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `adminLogins`<sup>Required</sup> <a name="adminLogins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.adminLogins"></a>

```typescript
public readonly adminLogins: string[];
```

- *Type:* string[]

---

##### `billingEmail`<sup>Required</sup> <a name="billingEmail" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.billingEmail"></a>

```typescript
public readonly billingEmail: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enterpriseId`<sup>Required</sup> <a name="enterpriseId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.enterpriseId"></a>

```typescript
public readonly enterpriseId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseOrganizationConfig <a name="EnterpriseOrganizationConfig" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.Initializer"></a>

```typescript
import { enterpriseOrganization } from '@cdktf/provider-github'

const enterpriseOrganizationConfig: enterpriseOrganization.EnterpriseOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.adminLogins">adminLogins</a></code> | <code>string[]</code> | List of organization owner usernames. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.billingEmail">billingEmail</a></code> | <code>string</code> | The billing email address. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.enterpriseId">enterpriseId</a></code> | <code>string</code> | The ID of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.name">name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.description">description</a></code> | <code>string</code> | The description of the organization. |
| <code><a href="#@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#id EnterpriseOrganization#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminLogins`<sup>Required</sup> <a name="adminLogins" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.adminLogins"></a>

```typescript
public readonly adminLogins: string[];
```

- *Type:* string[]

List of organization owner usernames.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#admin_logins EnterpriseOrganization#admin_logins}

---

##### `billingEmail`<sup>Required</sup> <a name="billingEmail" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.billingEmail"></a>

```typescript
public readonly billingEmail: string;
```

- *Type:* string

The billing email address.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#billing_email EnterpriseOrganization#billing_email}

---

##### `enterpriseId`<sup>Required</sup> <a name="enterpriseId" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.enterpriseId"></a>

```typescript
public readonly enterpriseId: string;
```

- *Type:* string

The ID of the enterprise.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#enterprise_id EnterpriseOrganization#enterprise_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#name EnterpriseOrganization#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#description EnterpriseOrganization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseOrganization.EnterpriseOrganizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/enterprise_organization#id EnterpriseOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



