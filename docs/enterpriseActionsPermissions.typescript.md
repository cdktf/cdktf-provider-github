# `enterpriseActionsPermissions` Submodule <a name="`enterpriseActionsPermissions` Submodule" id="@cdktf/provider-github.enterpriseActionsPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseActionsPermissions <a name="EnterpriseActionsPermissions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions github_enterprise_actions_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

new enterpriseActionsPermissions.EnterpriseActionsPermissions(scope: Construct, id: string, config: EnterpriseActionsPermissionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig">EnterpriseActionsPermissionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig">EnterpriseActionsPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig">putAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putEnabledOrganizationsConfig">putEnabledOrganizationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActions">resetAllowedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActionsConfig">resetAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetEnabledOrganizationsConfig">resetEnabledOrganizationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedActionsConfig` <a name="putAllowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig"></a>

```typescript
public putAllowedActionsConfig(value: EnterpriseActionsPermissionsAllowedActionsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putAllowedActionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

---

##### `putEnabledOrganizationsConfig` <a name="putEnabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putEnabledOrganizationsConfig"></a>

```typescript
public putEnabledOrganizationsConfig(value: EnterpriseActionsPermissionsEnabledOrganizationsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.putEnabledOrganizationsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

---

##### `resetAllowedActions` <a name="resetAllowedActions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActions"></a>

```typescript
public resetAllowedActions(): void
```

##### `resetAllowedActionsConfig` <a name="resetAllowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetAllowedActionsConfig"></a>

```typescript
public resetAllowedActionsConfig(): void
```

##### `resetEnabledOrganizationsConfig` <a name="resetEnabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetEnabledOrganizationsConfig"></a>

```typescript
public resetEnabledOrganizationsConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseActionsPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EnterpriseActionsPermissions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseActionsPermissions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseActionsPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseActionsPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfig">allowedActionsConfig</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference">EnterpriseActionsPermissionsAllowedActionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfig">enabledOrganizationsConfig</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference">EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfigInput">allowedActionsConfigInput</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsInput">allowedActionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfigInput">enabledOrganizationsConfigInput</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsInput">enabledOrganizationsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlugInput">enterpriseSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActions">allowedActions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizations">enabledOrganizations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlug">enterpriseSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedActionsConfig`<sup>Required</sup> <a name="allowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfig"></a>

```typescript
public readonly allowedActionsConfig: EnterpriseActionsPermissionsAllowedActionsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference">EnterpriseActionsPermissionsAllowedActionsConfigOutputReference</a>

---

##### `enabledOrganizationsConfig`<sup>Required</sup> <a name="enabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfig"></a>

```typescript
public readonly enabledOrganizationsConfig: EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference">EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference</a>

---

##### `allowedActionsConfigInput`<sup>Optional</sup> <a name="allowedActionsConfigInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsConfigInput"></a>

```typescript
public readonly allowedActionsConfigInput: EnterpriseActionsPermissionsAllowedActionsConfig;
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

---

##### `allowedActionsInput`<sup>Optional</sup> <a name="allowedActionsInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActionsInput"></a>

```typescript
public readonly allowedActionsInput: string;
```

- *Type:* string

---

##### `enabledOrganizationsConfigInput`<sup>Optional</sup> <a name="enabledOrganizationsConfigInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsConfigInput"></a>

```typescript
public readonly enabledOrganizationsConfigInput: EnterpriseActionsPermissionsEnabledOrganizationsConfig;
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

---

##### `enabledOrganizationsInput`<sup>Optional</sup> <a name="enabledOrganizationsInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizationsInput"></a>

```typescript
public readonly enabledOrganizationsInput: string;
```

- *Type:* string

---

##### `enterpriseSlugInput`<sup>Optional</sup> <a name="enterpriseSlugInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlugInput"></a>

```typescript
public readonly enterpriseSlugInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.allowedActions"></a>

```typescript
public readonly allowedActions: string;
```

- *Type:* string

---

##### `enabledOrganizations`<sup>Required</sup> <a name="enabledOrganizations" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enabledOrganizations"></a>

```typescript
public readonly enabledOrganizations: string;
```

- *Type:* string

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.enterpriseSlug"></a>

```typescript
public readonly enterpriseSlug: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseActionsPermissionsAllowedActionsConfig <a name="EnterpriseActionsPermissionsAllowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.Initializer"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

const enterpriseActionsPermissionsAllowedActionsConfig: enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.githubOwnedAllowed">githubOwnedAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether GitHub-owned actions are allowed in the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.patternsAllowed">patternsAllowed</a></code> | <code>string[]</code> | Specifies a list of string-matching patterns to allow specific action(s). |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.verifiedAllowed">verifiedAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether actions in GitHub Marketplace from verified creators are allowed. |

---

##### `githubOwnedAllowed`<sup>Required</sup> <a name="githubOwnedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.githubOwnedAllowed"></a>

```typescript
public readonly githubOwnedAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether GitHub-owned actions are allowed in the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#github_owned_allowed EnterpriseActionsPermissions#github_owned_allowed}

---

##### `patternsAllowed`<sup>Optional</sup> <a name="patternsAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.patternsAllowed"></a>

```typescript
public readonly patternsAllowed: string[];
```

- *Type:* string[]

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#patterns_allowed EnterpriseActionsPermissions#patterns_allowed}

---

##### `verifiedAllowed`<sup>Optional</sup> <a name="verifiedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig.property.verifiedAllowed"></a>

```typescript
public readonly verifiedAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#verified_allowed EnterpriseActionsPermissions#verified_allowed}

---

### EnterpriseActionsPermissionsConfig <a name="EnterpriseActionsPermissionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.Initializer"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

const enterpriseActionsPermissionsConfig: enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizations">enabledOrganizations</a></code> | <code>string</code> | The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enterpriseSlug">enterpriseSlug</a></code> | <code>string</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActions">allowedActions</a></code> | <code>string</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActionsConfig">allowedActionsConfig</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizationsConfig">enabledOrganizationsConfig</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | enabled_organizations_config block. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabledOrganizations`<sup>Required</sup> <a name="enabledOrganizations" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizations"></a>

```typescript
public readonly enabledOrganizations: string;
```

- *Type:* string

The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions.

Can be one of: 'all', 'none', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#enabled_organizations EnterpriseActionsPermissions#enabled_organizations}

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enterpriseSlug"></a>

```typescript
public readonly enterpriseSlug: string;
```

- *Type:* string

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#enterprise_slug EnterpriseActionsPermissions#enterprise_slug}

---

##### `allowedActions`<sup>Optional</sup> <a name="allowedActions" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActions"></a>

```typescript
public readonly allowedActions: string;
```

- *Type:* string

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#allowed_actions EnterpriseActionsPermissions#allowed_actions}

---

##### `allowedActionsConfig`<sup>Optional</sup> <a name="allowedActionsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.allowedActionsConfig"></a>

```typescript
public readonly allowedActionsConfig: EnterpriseActionsPermissionsAllowedActionsConfig;
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#allowed_actions_config EnterpriseActionsPermissions#allowed_actions_config}

---

##### `enabledOrganizationsConfig`<sup>Optional</sup> <a name="enabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.enabledOrganizationsConfig"></a>

```typescript
public readonly enabledOrganizationsConfig: EnterpriseActionsPermissionsEnabledOrganizationsConfig;
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

enabled_organizations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#enabled_organizations_config EnterpriseActionsPermissions#enabled_organizations_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#id EnterpriseActionsPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### EnterpriseActionsPermissionsEnabledOrganizationsConfig <a name="EnterpriseActionsPermissionsEnabledOrganizationsConfig" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig.Initializer"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

const enterpriseActionsPermissionsEnabledOrganizationsConfig: enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig.property.organizationIds">organizationIds</a></code> | <code>number[]</code> | List of organization IDs to enable for GitHub Actions. |

---

##### `organizationIds`<sup>Required</sup> <a name="organizationIds" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig.property.organizationIds"></a>

```typescript
public readonly organizationIds: number[];
```

- *Type:* number[]

List of organization IDs to enable for GitHub Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.1/docs/resources/enterprise_actions_permissions#organization_ids EnterpriseActionsPermissions#organization_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### EnterpriseActionsPermissionsAllowedActionsConfigOutputReference <a name="EnterpriseActionsPermissionsAllowedActionsConfigOutputReference" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

new enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed">resetPatternsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed">resetVerifiedAllowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPatternsAllowed` <a name="resetPatternsAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed"></a>

```typescript
public resetPatternsAllowed(): void
```

##### `resetVerifiedAllowed` <a name="resetVerifiedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed"></a>

```typescript
public resetVerifiedAllowed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput">githubOwnedAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput">patternsAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput">verifiedAllowedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed">githubOwnedAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed">patternsAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed">verifiedAllowed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `githubOwnedAllowedInput`<sup>Optional</sup> <a name="githubOwnedAllowedInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput"></a>

```typescript
public readonly githubOwnedAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patternsAllowedInput`<sup>Optional</sup> <a name="patternsAllowedInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput"></a>

```typescript
public readonly patternsAllowedInput: string[];
```

- *Type:* string[]

---

##### `verifiedAllowedInput`<sup>Optional</sup> <a name="verifiedAllowedInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput"></a>

```typescript
public readonly verifiedAllowedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `githubOwnedAllowed`<sup>Required</sup> <a name="githubOwnedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed"></a>

```typescript
public readonly githubOwnedAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patternsAllowed`<sup>Required</sup> <a name="patternsAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed"></a>

```typescript
public readonly patternsAllowed: string[];
```

- *Type:* string[]

---

##### `verifiedAllowed`<sup>Required</sup> <a name="verifiedAllowed" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed"></a>

```typescript
public readonly verifiedAllowed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnterpriseActionsPermissionsAllowedActionsConfig;
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsAllowedActionsConfig">EnterpriseActionsPermissionsAllowedActionsConfig</a>

---


### EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference <a name="EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer"></a>

```typescript
import { enterpriseActionsPermissions } from '@cdktf/provider-github'

new enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIdsInput">organizationIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIds">organizationIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationIdsInput`<sup>Optional</sup> <a name="organizationIdsInput" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIdsInput"></a>

```typescript
public readonly organizationIdsInput: number[];
```

- *Type:* number[]

---

##### `organizationIds`<sup>Required</sup> <a name="organizationIds" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.organizationIds"></a>

```typescript
public readonly organizationIds: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EnterpriseActionsPermissionsEnabledOrganizationsConfig;
```

- *Type:* <a href="#@cdktf/provider-github.enterpriseActionsPermissions.EnterpriseActionsPermissionsEnabledOrganizationsConfig">EnterpriseActionsPermissionsEnabledOrganizationsConfig</a>

---



