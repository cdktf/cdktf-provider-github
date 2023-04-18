# `github_dependabot_secret`

Refer to the Terraform Registory for docs: [`github_dependabot_secret`](https://www.terraform.io/docs/providers/github/r/dependabot_secret).

# `dependabotSecret` Submodule <a name="`dependabotSecret` Submodule" id="@cdktf/provider-github.dependabotSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DependabotSecret <a name="DependabotSecret" id="@cdktf/provider-github.dependabotSecret.DependabotSecret"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/dependabot_secret github_dependabot_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.Initializer"></a>

```typescript
import { dependabotSecret } from '@cdktf/provider-github'

new dependabotSecret.DependabotSecret(scope: Construct, id: string, config: DependabotSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig">DependabotSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig">DependabotSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.resetEncryptedValue">resetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.resetPlaintextValue">resetPlaintextValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEncryptedValue` <a name="resetEncryptedValue" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.resetEncryptedValue"></a>

```typescript
public resetEncryptedValue(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPlaintextValue` <a name="resetPlaintextValue" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.resetPlaintextValue"></a>

```typescript
public resetPlaintextValue(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.isConstruct"></a>

```typescript
import { dependabotSecret } from '@cdktf/provider-github'

dependabotSecret.DependabotSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.isTerraformElement"></a>

```typescript
import { dependabotSecret } from '@cdktf/provider-github'

dependabotSecret.DependabotSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.isTerraformResource"></a>

```typescript
import { dependabotSecret } from '@cdktf/provider-github'

dependabotSecret.DependabotSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.encryptedValueInput">encryptedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.plaintextValueInput">plaintextValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.encryptedValue">encryptedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.plaintextValue">plaintextValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `encryptedValueInput`<sup>Optional</sup> <a name="encryptedValueInput" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.encryptedValueInput"></a>

```typescript
public readonly encryptedValueInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `plaintextValueInput`<sup>Optional</sup> <a name="plaintextValueInput" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.plaintextValueInput"></a>

```typescript
public readonly plaintextValueInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `encryptedValue`<sup>Required</sup> <a name="encryptedValue" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.encryptedValue"></a>

```typescript
public readonly encryptedValue: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `plaintextValue`<sup>Required</sup> <a name="plaintextValue" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.plaintextValue"></a>

```typescript
public readonly plaintextValue: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.dependabotSecret.DependabotSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DependabotSecretConfig <a name="DependabotSecretConfig" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.Initializer"></a>

```typescript
import { dependabotSecret } from '@cdktf/provider-github'

const dependabotSecretConfig: dependabotSecret.DependabotSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.repository">repository</a></code> | <code>string</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.secretName">secretName</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.encryptedValue">encryptedValue</a></code> | <code>string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/dependabot_secret#id DependabotSecret#id}. |
| <code><a href="#@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.plaintextValue">plaintextValue</a></code> | <code>string</code> | Plaintext value of the secret to be encrypted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Name of the repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/dependabot_secret#repository DependabotSecret#repository}

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/dependabot_secret#secret_name DependabotSecret#secret_name}

---

##### `encryptedValue`<sup>Optional</sup> <a name="encryptedValue" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.encryptedValue"></a>

```typescript
public readonly encryptedValue: string;
```

- *Type:* string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/dependabot_secret#encrypted_value DependabotSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/dependabot_secret#id DependabotSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `plaintextValue`<sup>Optional</sup> <a name="plaintextValue" id="@cdktf/provider-github.dependabotSecret.DependabotSecretConfig.property.plaintextValue"></a>

```typescript
public readonly plaintextValue: string;
```

- *Type:* string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/dependabot_secret#plaintext_value DependabotSecret#plaintext_value}

---



