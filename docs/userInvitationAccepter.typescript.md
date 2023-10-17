# `github_user_invitation_accepter`

Refer to the Terraform Registory for docs: [`github_user_invitation_accepter`](https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/user_invitation_accepter).

# `userInvitationAccepter` Submodule <a name="`userInvitationAccepter` Submodule" id="@cdktf/provider-github.userInvitationAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserInvitationAccepter <a name="UserInvitationAccepter" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/user_invitation_accepter github_user_invitation_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer"></a>

```typescript
import { userInvitationAccepter } from '@cdktf/provider-github'

new userInvitationAccepter.UserInvitationAccepter(scope: Construct, id: string, config?: UserInvitationAccepterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig">UserInvitationAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig">UserInvitationAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetAllowEmptyId">resetAllowEmptyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetInvitationId">resetInvitationId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAllowEmptyId` <a name="resetAllowEmptyId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetAllowEmptyId"></a>

```typescript
public resetAllowEmptyId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInvitationId` <a name="resetInvitationId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.resetInvitationId"></a>

```typescript
public resetInvitationId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a UserInvitationAccepter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isConstruct"></a>

```typescript
import { userInvitationAccepter } from '@cdktf/provider-github'

userInvitationAccepter.UserInvitationAccepter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformElement"></a>

```typescript
import { userInvitationAccepter } from '@cdktf/provider-github'

userInvitationAccepter.UserInvitationAccepter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformResource"></a>

```typescript
import { userInvitationAccepter } from '@cdktf/provider-github'

userInvitationAccepter.UserInvitationAccepter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.generateConfigForImport"></a>

```typescript
import { userInvitationAccepter } from '@cdktf/provider-github'

userInvitationAccepter.UserInvitationAccepter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a UserInvitationAccepter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UserInvitationAccepter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UserInvitationAccepter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/user_invitation_accepter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UserInvitationAccepter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.allowEmptyIdInput">allowEmptyIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.invitationIdInput">invitationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.allowEmptyId">allowEmptyId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.invitationId">invitationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowEmptyIdInput`<sup>Optional</sup> <a name="allowEmptyIdInput" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.allowEmptyIdInput"></a>

```typescript
public readonly allowEmptyIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `invitationIdInput`<sup>Optional</sup> <a name="invitationIdInput" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.invitationIdInput"></a>

```typescript
public readonly invitationIdInput: string;
```

- *Type:* string

---

##### `allowEmptyId`<sup>Required</sup> <a name="allowEmptyId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.allowEmptyId"></a>

```typescript
public readonly allowEmptyId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `invitationId`<sup>Required</sup> <a name="invitationId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.invitationId"></a>

```typescript
public readonly invitationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserInvitationAccepterConfig <a name="UserInvitationAccepterConfig" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.Initializer"></a>

```typescript
import { userInvitationAccepter } from '@cdktf/provider-github'

const userInvitationAccepterConfig: userInvitationAccepter.UserInvitationAccepterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.allowEmptyId">allowEmptyId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow the ID to be unset. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/user_invitation_accepter#id UserInvitationAccepter#id}. |
| <code><a href="#@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.invitationId">invitationId</a></code> | <code>string</code> | ID of the invitation to accept. Must be set when 'allow_empty_id' is 'false'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowEmptyId`<sup>Optional</sup> <a name="allowEmptyId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.allowEmptyId"></a>

```typescript
public readonly allowEmptyId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow the ID to be unset.

This will result in the resource being skipped when the ID is not set instead of returning an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/user_invitation_accepter#allow_empty_id UserInvitationAccepter#allow_empty_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/user_invitation_accepter#id UserInvitationAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invitationId`<sup>Optional</sup> <a name="invitationId" id="@cdktf/provider-github.userInvitationAccepter.UserInvitationAccepterConfig.property.invitationId"></a>

```typescript
public readonly invitationId: string;
```

- *Type:* string

ID of the invitation to accept. Must be set when 'allow_empty_id' is 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.40.0/docs/resources/user_invitation_accepter#invitation_id UserInvitationAccepter#invitation_id}

---



