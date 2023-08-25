# `github_codespaces_organization_secret_repositories`

Refer to the Terraform Registory for docs: [`github_codespaces_organization_secret_repositories`](https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_organization_secret_repositories).

# `codespacesOrganizationSecretRepositories` Submodule <a name="`codespacesOrganizationSecretRepositories` Submodule" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodespacesOrganizationSecretRepositories <a name="CodespacesOrganizationSecretRepositories" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_organization_secret_repositories github_codespaces_organization_secret_repositories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer"></a>

```typescript
import { codespacesOrganizationSecretRepositories } from '@cdktf/provider-github'

new codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories(scope: Construct, id: string, config: CodespacesOrganizationSecretRepositoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig">CodespacesOrganizationSecretRepositoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig">CodespacesOrganizationSecretRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct"></a>

```typescript
import { codespacesOrganizationSecretRepositories } from '@cdktf/provider-github'

codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement"></a>

```typescript
import { codespacesOrganizationSecretRepositories } from '@cdktf/provider-github'

codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource"></a>

```typescript
import { codespacesOrganizationSecretRepositories } from '@cdktf/provider-github'

codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretNameInput">secretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIdsInput">selectedRepositoryIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>number[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretNameInput"></a>

```typescript
public readonly secretNameInput: string;
```

- *Type:* string

---

##### `selectedRepositoryIdsInput`<sup>Optional</sup> <a name="selectedRepositoryIdsInput" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIdsInput"></a>

```typescript
public readonly selectedRepositoryIdsInput: number[];
```

- *Type:* number[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.selectedRepositoryIds"></a>

```typescript
public readonly selectedRepositoryIds: number[];
```

- *Type:* number[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodespacesOrganizationSecretRepositoriesConfig <a name="CodespacesOrganizationSecretRepositoriesConfig" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.Initializer"></a>

```typescript
import { codespacesOrganizationSecretRepositories } from '@cdktf/provider-github'

const codespacesOrganizationSecretRepositoriesConfig: codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.secretName">secretName</a></code> | <code>string</code> | Name of the existing secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds">selectedRepositoryIds</a></code> | <code>number[]</code> | An array of repository ids that can access the organization secret. |
| <code><a href="#@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_organization_secret_repositories#id CodespacesOrganizationSecretRepositories#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

Name of the existing secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_organization_secret_repositories#secret_name CodespacesOrganizationSecretRepositories#secret_name}

---

##### `selectedRepositoryIds`<sup>Required</sup> <a name="selectedRepositoryIds" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.selectedRepositoryIds"></a>

```typescript
public readonly selectedRepositoryIds: number[];
```

- *Type:* number[]

An array of repository ids that can access the organization secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_organization_secret_repositories#selected_repository_ids CodespacesOrganizationSecretRepositories#selected_repository_ids}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.codespacesOrganizationSecretRepositories.CodespacesOrganizationSecretRepositoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.34.0/docs/resources/codespaces_organization_secret_repositories#id CodespacesOrganizationSecretRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



