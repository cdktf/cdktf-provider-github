# `github_actions_repository_permissions`

Refer to the Terraform Registory for docs: [`github_actions_repository_permissions`](https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions).

# `actionsRepositoryPermissions` Submodule <a name="`actionsRepositoryPermissions` Submodule" id="@cdktf/provider-github.actionsRepositoryPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsRepositoryPermissions <a name="ActionsRepositoryPermissions" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions github_actions_repository_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer"></a>

```typescript
import { actionsRepositoryPermissions } from '@cdktf/provider-github'

new actionsRepositoryPermissions.ActionsRepositoryPermissions(scope: Construct, id: string, config: ActionsRepositoryPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig">ActionsRepositoryPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig">ActionsRepositoryPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.putAllowedActionsConfig">putAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetAllowedActions">resetAllowedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetAllowedActionsConfig">resetAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAllowedActionsConfig` <a name="putAllowedActionsConfig" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.putAllowedActionsConfig"></a>

```typescript
public putAllowedActionsConfig(value: ActionsRepositoryPermissionsAllowedActionsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.putAllowedActionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a>

---

##### `resetAllowedActions` <a name="resetAllowedActions" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetAllowedActions"></a>

```typescript
public resetAllowedActions(): void
```

##### `resetAllowedActionsConfig` <a name="resetAllowedActionsConfig" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetAllowedActionsConfig"></a>

```typescript
public resetAllowedActionsConfig(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isConstruct"></a>

```typescript
import { actionsRepositoryPermissions } from '@cdktf/provider-github'

actionsRepositoryPermissions.ActionsRepositoryPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformElement"></a>

```typescript
import { actionsRepositoryPermissions } from '@cdktf/provider-github'

actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformResource"></a>

```typescript
import { actionsRepositoryPermissions } from '@cdktf/provider-github'

actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsConfig">allowedActionsConfig</a></code> | <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference">ActionsRepositoryPermissionsAllowedActionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsConfigInput">allowedActionsConfigInput</a></code> | <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsInput">allowedActionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActions">allowedActions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedActionsConfig`<sup>Required</sup> <a name="allowedActionsConfig" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsConfig"></a>

```typescript
public readonly allowedActionsConfig: ActionsRepositoryPermissionsAllowedActionsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference">ActionsRepositoryPermissionsAllowedActionsConfigOutputReference</a>

---

##### `allowedActionsConfigInput`<sup>Optional</sup> <a name="allowedActionsConfigInput" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsConfigInput"></a>

```typescript
public readonly allowedActionsConfigInput: ActionsRepositoryPermissionsAllowedActionsConfig;
```

- *Type:* <a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a>

---

##### `allowedActionsInput`<sup>Optional</sup> <a name="allowedActionsInput" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActionsInput"></a>

```typescript
public readonly allowedActionsInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.allowedActions"></a>

```typescript
public readonly allowedActions: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsRepositoryPermissionsAllowedActionsConfig <a name="ActionsRepositoryPermissionsAllowedActionsConfig" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.Initializer"></a>

```typescript
import { actionsRepositoryPermissions } from '@cdktf/provider-github'

const actionsRepositoryPermissionsAllowedActionsConfig: actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.githubOwnedAllowed">githubOwnedAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether GitHub-owned actions are allowed in the repository. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.patternsAllowed">patternsAllowed</a></code> | <code>string[]</code> | Specifies a list of string-matching patterns to allow specific action(s). |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.verifiedAllowed">verifiedAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether actions in GitHub Marketplace from verified creators are allowed. |

---

##### `githubOwnedAllowed`<sup>Required</sup> <a name="githubOwnedAllowed" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.githubOwnedAllowed"></a>

```typescript
public readonly githubOwnedAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether GitHub-owned actions are allowed in the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions#github_owned_allowed ActionsRepositoryPermissions#github_owned_allowed}

---

##### `patternsAllowed`<sup>Optional</sup> <a name="patternsAllowed" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.patternsAllowed"></a>

```typescript
public readonly patternsAllowed: string[];
```

- *Type:* string[]

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions#patterns_allowed ActionsRepositoryPermissions#patterns_allowed}

---

##### `verifiedAllowed`<sup>Optional</sup> <a name="verifiedAllowed" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig.property.verifiedAllowed"></a>

```typescript
public readonly verifiedAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions#verified_allowed ActionsRepositoryPermissions#verified_allowed}

---

### ActionsRepositoryPermissionsConfig <a name="ActionsRepositoryPermissionsConfig" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.Initializer"></a>

```typescript
import { actionsRepositoryPermissions } from '@cdktf/provider-github'

const actionsRepositoryPermissionsConfig: actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.repository">repository</a></code> | <code>string</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.allowedActions">allowedActions</a></code> | <code>string</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.allowedActionsConfig">allowedActionsConfig</a></code> | <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should GitHub actions be enabled on this repository. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions#id ActionsRepositoryPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions#repository ActionsRepositoryPermissions#repository}

---

##### `allowedActions`<sup>Optional</sup> <a name="allowedActions" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.allowedActions"></a>

```typescript
public readonly allowedActions: string;
```

- *Type:* string

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions#allowed_actions ActionsRepositoryPermissions#allowed_actions}

---

##### `allowedActionsConfig`<sup>Optional</sup> <a name="allowedActionsConfig" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.allowedActionsConfig"></a>

```typescript
public readonly allowedActionsConfig: ActionsRepositoryPermissionsAllowedActionsConfig;
```

- *Type:* <a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions#allowed_actions_config ActionsRepositoryPermissions#allowed_actions_config}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should GitHub actions be enabled on this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions#enabled ActionsRepositoryPermissions#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.24.0/docs/resources/actions_repository_permissions#id ActionsRepositoryPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsRepositoryPermissionsAllowedActionsConfigOutputReference <a name="ActionsRepositoryPermissionsAllowedActionsConfigOutputReference" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer"></a>

```typescript
import { actionsRepositoryPermissions } from '@cdktf/provider-github'

new actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed">resetPatternsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed">resetVerifiedAllowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPatternsAllowed` <a name="resetPatternsAllowed" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed"></a>

```typescript
public resetPatternsAllowed(): void
```

##### `resetVerifiedAllowed` <a name="resetVerifiedAllowed" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed"></a>

```typescript
public resetVerifiedAllowed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput">githubOwnedAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput">patternsAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput">verifiedAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed">githubOwnedAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed">patternsAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed">verifiedAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `githubOwnedAllowedInput`<sup>Optional</sup> <a name="githubOwnedAllowedInput" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput"></a>

```typescript
public readonly githubOwnedAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patternsAllowedInput`<sup>Optional</sup> <a name="patternsAllowedInput" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput"></a>

```typescript
public readonly patternsAllowedInput: string[];
```

- *Type:* string[]

---

##### `verifiedAllowedInput`<sup>Optional</sup> <a name="verifiedAllowedInput" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput"></a>

```typescript
public readonly verifiedAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `githubOwnedAllowed`<sup>Required</sup> <a name="githubOwnedAllowed" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed"></a>

```typescript
public readonly githubOwnedAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patternsAllowed`<sup>Required</sup> <a name="patternsAllowed" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed"></a>

```typescript
public readonly patternsAllowed: string[];
```

- *Type:* string[]

---

##### `verifiedAllowed`<sup>Required</sup> <a name="verifiedAllowed" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed"></a>

```typescript
public readonly verifiedAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ActionsRepositoryPermissionsAllowedActionsConfig;
```

- *Type:* <a href="#@cdktf/provider-github.actionsRepositoryPermissions.ActionsRepositoryPermissionsAllowedActionsConfig">ActionsRepositoryPermissionsAllowedActionsConfig</a>

---



