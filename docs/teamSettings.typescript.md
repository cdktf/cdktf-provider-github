# `github_team_settings`

Refer to the Terraform Registory for docs: [`github_team_settings`](https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/team_settings).

# `teamSettings` Submodule <a name="`teamSettings` Submodule" id="@cdktf/provider-github.teamSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSettings <a name="TeamSettings" id="@cdktf/provider-github.teamSettings.TeamSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/team_settings github_team_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSettings.TeamSettings.Initializer"></a>

```typescript
import { teamSettings } from '@cdktf/provider-github'

new teamSettings.TeamSettings(scope: Construct, id: string, config: TeamSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig">TeamSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.teamSettings.TeamSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig">TeamSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation">putReviewRequestDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.resetReviewRequestDelegation">resetReviewRequestDelegation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.teamSettings.TeamSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.teamSettings.TeamSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.teamSettings.TeamSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSettings.TeamSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.teamSettings.TeamSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.teamSettings.TeamSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.teamSettings.TeamSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.teamSettings.TeamSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.teamSettings.TeamSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putReviewRequestDelegation` <a name="putReviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation"></a>

```typescript
public putReviewRequestDelegation(value: TeamSettingsReviewRequestDelegation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSettings.TeamSettings.putReviewRequestDelegation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-github.teamSettings.TeamSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReviewRequestDelegation` <a name="resetReviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettings.resetReviewRequestDelegation"></a>

```typescript
public resetReviewRequestDelegation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.teamSettings.TeamSettings.isConstruct"></a>

```typescript
import { teamSettings } from '@cdktf/provider-github'

teamSettings.TeamSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSettings.TeamSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.teamSettings.TeamSettings.isTerraformElement"></a>

```typescript
import { teamSettings } from '@cdktf/provider-github'

teamSettings.TeamSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSettings.TeamSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.teamSettings.TeamSettings.isTerraformResource"></a>

```typescript
import { teamSettings } from '@cdktf/provider-github'

teamSettings.TeamSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSettings.TeamSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegation">reviewRequestDelegation</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference">TeamSettingsReviewRequestDelegationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.teamSlug">teamSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.teamUid">teamUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegationInput">reviewRequestDelegationInput</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.teamIdInput">teamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.teamSettings.TeamSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.teamSettings.TeamSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSettings.TeamSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.teamSettings.TeamSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.teamSettings.TeamSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.teamSettings.TeamSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.teamSettings.TeamSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSettings.TeamSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSettings.TeamSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.teamSettings.TeamSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.teamSettings.TeamSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSettings.TeamSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSettings.TeamSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSettings.TeamSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `reviewRequestDelegation`<sup>Required</sup> <a name="reviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegation"></a>

```typescript
public readonly reviewRequestDelegation: TeamSettingsReviewRequestDelegationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference">TeamSettingsReviewRequestDelegationOutputReference</a>

---

##### `teamSlug`<sup>Required</sup> <a name="teamSlug" id="@cdktf/provider-github.teamSettings.TeamSettings.property.teamSlug"></a>

```typescript
public readonly teamSlug: string;
```

- *Type:* string

---

##### `teamUid`<sup>Required</sup> <a name="teamUid" id="@cdktf/provider-github.teamSettings.TeamSettings.property.teamUid"></a>

```typescript
public readonly teamUid: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.teamSettings.TeamSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `reviewRequestDelegationInput`<sup>Optional</sup> <a name="reviewRequestDelegationInput" id="@cdktf/provider-github.teamSettings.TeamSettings.property.reviewRequestDelegationInput"></a>

```typescript
public readonly reviewRequestDelegationInput: TeamSettingsReviewRequestDelegation;
```

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-github.teamSettings.TeamSettings.property.teamIdInput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSettings.TeamSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-github.teamSettings.TeamSettings.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.teamSettings.TeamSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSettingsConfig <a name="TeamSettingsConfig" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.Initializer"></a>

```typescript
import { teamSettings } from '@cdktf/provider-github'

const teamSettingsConfig: teamSettings.TeamSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.teamId">teamId</a></code> | <code>string</code> | The GitHub team id or the GitHub team slug. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/team_settings#id TeamSettings#id}. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.reviewRequestDelegation">reviewRequestDelegation</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | review_request_delegation block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

The GitHub team id or the GitHub team slug.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/team_settings#team_id TeamSettings#team_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/team_settings#id TeamSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reviewRequestDelegation`<sup>Optional</sup> <a name="reviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettingsConfig.property.reviewRequestDelegation"></a>

```typescript
public readonly reviewRequestDelegation: TeamSettingsReviewRequestDelegation;
```

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

review_request_delegation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/team_settings#review_request_delegation TeamSettings#review_request_delegation}

---

### TeamSettingsReviewRequestDelegation <a name="TeamSettingsReviewRequestDelegation" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.Initializer"></a>

```typescript
import { teamSettings } from '@cdktf/provider-github'

const teamSettingsReviewRequestDelegation: teamSettings.TeamSettingsReviewRequestDelegation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.algorithm">algorithm</a></code> | <code>string</code> | The algorithm to use when assigning pull requests to team members. Supported values are 'ROUND_ROBIN' and 'LOAD_BALANCE'. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.memberCount">memberCount</a></code> | <code>number</code> | The number of team members to assign to a pull request. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.notify">notify</a></code> | <code>boolean \| cdktf.IResolvable</code> | whether to notify the entire team when at least one member is also assigned to the pull request. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

The algorithm to use when assigning pull requests to team members. Supported values are 'ROUND_ROBIN' and 'LOAD_BALANCE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/team_settings#algorithm TeamSettings#algorithm}

---

##### `memberCount`<sup>Optional</sup> <a name="memberCount" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.memberCount"></a>

```typescript
public readonly memberCount: number;
```

- *Type:* number

The number of team members to assign to a pull request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/team_settings#member_count TeamSettings#member_count}

---

##### `notify`<sup>Optional</sup> <a name="notify" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation.property.notify"></a>

```typescript
public readonly notify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

whether to notify the entire team when at least one member is also assigned to the pull request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.31.0/docs/resources/team_settings#notify TeamSettings#notify}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSettingsReviewRequestDelegationOutputReference <a name="TeamSettingsReviewRequestDelegationOutputReference" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer"></a>

```typescript
import { teamSettings } from '@cdktf/provider-github'

new teamSettings.TeamSettingsReviewRequestDelegationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetMemberCount">resetMemberCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetNotify">resetNotify</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetMemberCount` <a name="resetMemberCount" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetMemberCount"></a>

```typescript
public resetMemberCount(): void
```

##### `resetNotify` <a name="resetNotify" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.resetNotify"></a>

```typescript
public resetNotify(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCountInput">memberCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notifyInput">notifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCount">memberCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notify">notify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `memberCountInput`<sup>Optional</sup> <a name="memberCountInput" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCountInput"></a>

```typescript
public readonly memberCountInput: number;
```

- *Type:* number

---

##### `notifyInput`<sup>Optional</sup> <a name="notifyInput" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notifyInput"></a>

```typescript
public readonly notifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `memberCount`<sup>Required</sup> <a name="memberCount" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.memberCount"></a>

```typescript
public readonly memberCount: number;
```

- *Type:* number

---

##### `notify`<sup>Required</sup> <a name="notify" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.notify"></a>

```typescript
public readonly notify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TeamSettingsReviewRequestDelegation;
```

- *Type:* <a href="#@cdktf/provider-github.teamSettings.TeamSettingsReviewRequestDelegation">TeamSettingsReviewRequestDelegation</a>

---



