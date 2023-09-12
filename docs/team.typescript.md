# `github_team`

Refer to the Terraform Registory for docs: [`github_team`](https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team).

# `team` Submodule <a name="`team` Submodule" id="@cdktf/provider-github.team"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Team <a name="Team" id="@cdktf/provider-github.team.Team"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team github_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.team.Team.Initializer"></a>

```typescript
import { team } from '@cdktf/provider-github'

new team.Team(scope: Construct, id: string, config: TeamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.team.TeamConfig">TeamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.team.Team.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.team.Team.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.team.Team.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.team.TeamConfig">TeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.team.Team.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.team.Team.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.team.Team.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.team.Team.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetCreateDefaultMaintainer">resetCreateDefaultMaintainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetLdapDn">resetLdapDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamId">resetParentTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamReadId">resetParentTeamReadId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamReadSlug">resetParentTeamReadSlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetPrivacy">resetPrivacy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.team.Team.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.team.Team.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.team.Team.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.team.Team.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.team.Team.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.team.Team.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.team.Team.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.team.Team.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.team.Team.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.team.Team.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.team.Team.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.team.Team.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.team.Team.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.team.Team.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.team.Team.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.team.Team.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.team.Team.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.team.Team.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.team.Team.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.team.Team.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCreateDefaultMaintainer` <a name="resetCreateDefaultMaintainer" id="@cdktf/provider-github.team.Team.resetCreateDefaultMaintainer"></a>

```typescript
public resetCreateDefaultMaintainer(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-github.team.Team.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.team.Team.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLdapDn` <a name="resetLdapDn" id="@cdktf/provider-github.team.Team.resetLdapDn"></a>

```typescript
public resetLdapDn(): void
```

##### `resetParentTeamId` <a name="resetParentTeamId" id="@cdktf/provider-github.team.Team.resetParentTeamId"></a>

```typescript
public resetParentTeamId(): void
```

##### `resetParentTeamReadId` <a name="resetParentTeamReadId" id="@cdktf/provider-github.team.Team.resetParentTeamReadId"></a>

```typescript
public resetParentTeamReadId(): void
```

##### `resetParentTeamReadSlug` <a name="resetParentTeamReadSlug" id="@cdktf/provider-github.team.Team.resetParentTeamReadSlug"></a>

```typescript
public resetParentTeamReadSlug(): void
```

##### `resetPrivacy` <a name="resetPrivacy" id="@cdktf/provider-github.team.Team.resetPrivacy"></a>

```typescript
public resetPrivacy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.team.Team.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.team.Team.isConstruct"></a>

```typescript
import { team } from '@cdktf/provider-github'

team.Team.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.team.Team.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.team.Team.isTerraformElement"></a>

```typescript
import { team } from '@cdktf/provider-github'

team.Team.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.team.Team.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.team.Team.isTerraformResource"></a>

```typescript
import { team } from '@cdktf/provider-github'

team.Team.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.team.Team.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.team.Team.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.membersCount">membersCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.nodeId">nodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.slug">slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.createDefaultMaintainerInput">createDefaultMaintainerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.ldapDnInput">ldapDnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamIdInput">parentTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadIdInput">parentTeamReadIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadSlugInput">parentTeamReadSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.privacyInput">privacyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.createDefaultMaintainer">createDefaultMaintainer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.ldapDn">ldapDn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamId">parentTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadId">parentTeamReadId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadSlug">parentTeamReadSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.privacy">privacy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.team.Team.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.team.Team.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.team.Team.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.team.Team.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.team.Team.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.team.Team.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.team.Team.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.team.Team.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.team.Team.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.team.Team.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.team.Team.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.team.Team.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.team.Team.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.team.Team.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.team.Team.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `membersCount`<sup>Required</sup> <a name="membersCount" id="@cdktf/provider-github.team.Team.property.membersCount"></a>

```typescript
public readonly membersCount: number;
```

- *Type:* number

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdktf/provider-github.team.Team.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-github.team.Team.property.slug"></a>

```typescript
public readonly slug: string;
```

- *Type:* string

---

##### `createDefaultMaintainerInput`<sup>Optional</sup> <a name="createDefaultMaintainerInput" id="@cdktf/provider-github.team.Team.property.createDefaultMaintainerInput"></a>

```typescript
public readonly createDefaultMaintainerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-github.team.Team.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.team.Team.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ldapDnInput`<sup>Optional</sup> <a name="ldapDnInput" id="@cdktf/provider-github.team.Team.property.ldapDnInput"></a>

```typescript
public readonly ldapDnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-github.team.Team.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentTeamIdInput`<sup>Optional</sup> <a name="parentTeamIdInput" id="@cdktf/provider-github.team.Team.property.parentTeamIdInput"></a>

```typescript
public readonly parentTeamIdInput: string;
```

- *Type:* string

---

##### `parentTeamReadIdInput`<sup>Optional</sup> <a name="parentTeamReadIdInput" id="@cdktf/provider-github.team.Team.property.parentTeamReadIdInput"></a>

```typescript
public readonly parentTeamReadIdInput: string;
```

- *Type:* string

---

##### `parentTeamReadSlugInput`<sup>Optional</sup> <a name="parentTeamReadSlugInput" id="@cdktf/provider-github.team.Team.property.parentTeamReadSlugInput"></a>

```typescript
public readonly parentTeamReadSlugInput: string;
```

- *Type:* string

---

##### `privacyInput`<sup>Optional</sup> <a name="privacyInput" id="@cdktf/provider-github.team.Team.property.privacyInput"></a>

```typescript
public readonly privacyInput: string;
```

- *Type:* string

---

##### `createDefaultMaintainer`<sup>Required</sup> <a name="createDefaultMaintainer" id="@cdktf/provider-github.team.Team.property.createDefaultMaintainer"></a>

```typescript
public readonly createDefaultMaintainer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.team.Team.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.team.Team.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ldapDn`<sup>Required</sup> <a name="ldapDn" id="@cdktf/provider-github.team.Team.property.ldapDn"></a>

```typescript
public readonly ldapDn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.team.Team.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentTeamId`<sup>Required</sup> <a name="parentTeamId" id="@cdktf/provider-github.team.Team.property.parentTeamId"></a>

```typescript
public readonly parentTeamId: string;
```

- *Type:* string

---

##### `parentTeamReadId`<sup>Required</sup> <a name="parentTeamReadId" id="@cdktf/provider-github.team.Team.property.parentTeamReadId"></a>

```typescript
public readonly parentTeamReadId: string;
```

- *Type:* string

---

##### `parentTeamReadSlug`<sup>Required</sup> <a name="parentTeamReadSlug" id="@cdktf/provider-github.team.Team.property.parentTeamReadSlug"></a>

```typescript
public readonly parentTeamReadSlug: string;
```

- *Type:* string

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-github.team.Team.property.privacy"></a>

```typescript
public readonly privacy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.team.Team.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamConfig <a name="TeamConfig" id="@cdktf/provider-github.team.TeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.team.TeamConfig.Initializer"></a>

```typescript
import { team } from '@cdktf/provider-github'

const teamConfig: team.TeamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.name">name</a></code> | <code>string</code> | The name of the team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.createDefaultMaintainer">createDefaultMaintainer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Adds a default maintainer to the team. Adds the creating user to the team when 'true'. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.description">description</a></code> | <code>string</code> | A description of the team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.ldapDn">ldapDn</a></code> | <code>string</code> | The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamId">parentTeamId</a></code> | <code>string</code> | The ID or slug of the parent team, if this is a nested team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamReadId">parentTeamReadId</a></code> | <code>string</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamReadSlug">parentTeamReadSlug</a></code> | <code>string</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.privacy">privacy</a></code> | <code>string</code> | The level of privacy for the team. Must be one of 'secret' or 'closed'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.team.TeamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.team.TeamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.team.TeamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.team.TeamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.team.TeamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.team.TeamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.team.TeamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.team.TeamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#name Team#name}

---

##### `createDefaultMaintainer`<sup>Optional</sup> <a name="createDefaultMaintainer" id="@cdktf/provider-github.team.TeamConfig.property.createDefaultMaintainer"></a>

```typescript
public readonly createDefaultMaintainer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Adds a default maintainer to the team. Adds the creating user to the team when 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#create_default_maintainer Team#create_default_maintainer}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.team.TeamConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#description Team#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.team.TeamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldapDn`<sup>Optional</sup> <a name="ldapDn" id="@cdktf/provider-github.team.TeamConfig.property.ldapDn"></a>

```typescript
public readonly ldapDn: string;
```

- *Type:* string

The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#ldap_dn Team#ldap_dn}

---

##### `parentTeamId`<sup>Optional</sup> <a name="parentTeamId" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamId"></a>

```typescript
public readonly parentTeamId: string;
```

- *Type:* string

The ID or slug of the parent team, if this is a nested team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#parent_team_id Team#parent_team_id}

---

##### `parentTeamReadId`<sup>Optional</sup> <a name="parentTeamReadId" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamReadId"></a>

```typescript
public readonly parentTeamReadId: string;
```

- *Type:* string

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#parent_team_read_id Team#parent_team_read_id}

---

##### `parentTeamReadSlug`<sup>Optional</sup> <a name="parentTeamReadSlug" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamReadSlug"></a>

```typescript
public readonly parentTeamReadSlug: string;
```

- *Type:* string

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#parent_team_read_slug Team#parent_team_read_slug}

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktf/provider-github.team.TeamConfig.property.privacy"></a>

```typescript
public readonly privacy: string;
```

- *Type:* string

The level of privacy for the team. Must be one of 'secret' or 'closed'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.36.0/docs/resources/team#privacy Team#privacy}

---



