# `appInstallationRepositories` Submodule <a name="`appInstallationRepositories` Submodule" id="@cdktf/provider-github.appInstallationRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppInstallationRepositories <a name="AppInstallationRepositories" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/app_installation_repositories github_app_installation_repositories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer"></a>

```typescript
import { appInstallationRepositories } from '@cdktf/provider-github'

new appInstallationRepositories.AppInstallationRepositories(scope: Construct, id: string, config: AppInstallationRepositoriesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig">AppInstallationRepositoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig">AppInstallationRepositoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isConstruct"></a>

```typescript
import { appInstallationRepositories } from '@cdktf/provider-github'

appInstallationRepositories.AppInstallationRepositories.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformElement"></a>

```typescript
import { appInstallationRepositories } from '@cdktf/provider-github'

appInstallationRepositories.AppInstallationRepositories.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformResource"></a>

```typescript
import { appInstallationRepositories } from '@cdktf/provider-github'

appInstallationRepositories.AppInstallationRepositories.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.installationIdInput">installationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.selectedRepositoriesInput">selectedRepositoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.installationId">installationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.selectedRepositories">selectedRepositories</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installationIdInput`<sup>Optional</sup> <a name="installationIdInput" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.installationIdInput"></a>

```typescript
public readonly installationIdInput: string;
```

- *Type:* string

---

##### `selectedRepositoriesInput`<sup>Optional</sup> <a name="selectedRepositoriesInput" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.selectedRepositoriesInput"></a>

```typescript
public readonly selectedRepositoriesInput: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

---

##### `selectedRepositories`<sup>Required</sup> <a name="selectedRepositories" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.selectedRepositories"></a>

```typescript
public readonly selectedRepositories: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositories.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppInstallationRepositoriesConfig <a name="AppInstallationRepositoriesConfig" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.Initializer"></a>

```typescript
import { appInstallationRepositories } from '@cdktf/provider-github'

const appInstallationRepositoriesConfig: appInstallationRepositories.AppInstallationRepositoriesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.installationId">installationId</a></code> | <code>string</code> | The GitHub app installation id. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.selectedRepositories">selectedRepositories</a></code> | <code>string[]</code> | A list of repository names to install the app on. |
| <code><a href="#@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/app_installation_repositories#id AppInstallationRepositories#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

The GitHub app installation id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/app_installation_repositories#installation_id AppInstallationRepositories#installation_id}

---

##### `selectedRepositories`<sup>Required</sup> <a name="selectedRepositories" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.selectedRepositories"></a>

```typescript
public readonly selectedRepositories: string[];
```

- *Type:* string[]

A list of repository names to install the app on.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/app_installation_repositories#selected_repositories AppInstallationRepositories#selected_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.appInstallationRepositories.AppInstallationRepositoriesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/app_installation_repositories#id AppInstallationRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



