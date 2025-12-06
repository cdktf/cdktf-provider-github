# `enterpriseSecurityAnalysisSettings` Submodule <a name="`enterpriseSecurityAnalysisSettings` Submodule" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseSecurityAnalysisSettings <a name="EnterpriseSecurityAnalysisSettings" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer"></a>

```typescript
import { enterpriseSecurityAnalysisSettings } from '@cdktf/provider-github'

new enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings(scope: Construct, id: string, config: EnterpriseSecurityAnalysisSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig">EnterpriseSecurityAnalysisSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig">EnterpriseSecurityAnalysisSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetAdvancedSecurityEnabledForNewRepositories">resetAdvancedSecurityEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningEnabledForNewRepositories">resetSecretScanningEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionCustomLink">resetSecretScanningPushProtectionCustomLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionEnabledForNewRepositories">resetSecretScanningPushProtectionEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningValidityChecksEnabled">resetSecretScanningValidityChecksEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAdvancedSecurityEnabledForNewRepositories` <a name="resetAdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetAdvancedSecurityEnabledForNewRepositories"></a>

```typescript
public resetAdvancedSecurityEnabledForNewRepositories(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecretScanningEnabledForNewRepositories` <a name="resetSecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningEnabledForNewRepositories"></a>

```typescript
public resetSecretScanningEnabledForNewRepositories(): void
```

##### `resetSecretScanningPushProtectionCustomLink` <a name="resetSecretScanningPushProtectionCustomLink" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionCustomLink"></a>

```typescript
public resetSecretScanningPushProtectionCustomLink(): void
```

##### `resetSecretScanningPushProtectionEnabledForNewRepositories` <a name="resetSecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionEnabledForNewRepositories"></a>

```typescript
public resetSecretScanningPushProtectionEnabledForNewRepositories(): void
```

##### `resetSecretScanningValidityChecksEnabled` <a name="resetSecretScanningValidityChecksEnabled" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningValidityChecksEnabled"></a>

```typescript
public resetSecretScanningValidityChecksEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseSecurityAnalysisSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct"></a>

```typescript
import { enterpriseSecurityAnalysisSettings } from '@cdktf/provider-github'

enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement"></a>

```typescript
import { enterpriseSecurityAnalysisSettings } from '@cdktf/provider-github'

enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource"></a>

```typescript
import { enterpriseSecurityAnalysisSettings } from '@cdktf/provider-github'

enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport"></a>

```typescript
import { enterpriseSecurityAnalysisSettings } from '@cdktf/provider-github'

enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EnterpriseSecurityAnalysisSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseSecurityAnalysisSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseSecurityAnalysisSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseSecurityAnalysisSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositoriesInput">advancedSecurityEnabledForNewRepositoriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlugInput">enterpriseSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositoriesInput">secretScanningEnabledForNewRepositoriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLinkInput">secretScanningPushProtectionCustomLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput">secretScanningPushProtectionEnabledForNewRepositoriesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabledInput">secretScanningValidityChecksEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositories">advancedSecurityEnabledForNewRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlug">enterpriseSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositories">secretScanningEnabledForNewRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLink">secretScanningPushProtectionCustomLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositories">secretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabled">secretScanningValidityChecksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedSecurityEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="advancedSecurityEnabledForNewRepositoriesInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositoriesInput"></a>

```typescript
public readonly advancedSecurityEnabledForNewRepositoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterpriseSlugInput`<sup>Optional</sup> <a name="enterpriseSlugInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlugInput"></a>

```typescript
public readonly enterpriseSlugInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `secretScanningEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="secretScanningEnabledForNewRepositoriesInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositoriesInput"></a>

```typescript
public readonly secretScanningEnabledForNewRepositoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretScanningPushProtectionCustomLinkInput`<sup>Optional</sup> <a name="secretScanningPushProtectionCustomLinkInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLinkInput"></a>

```typescript
public readonly secretScanningPushProtectionCustomLinkInput: string;
```

- *Type:* string

---

##### `secretScanningPushProtectionEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="secretScanningPushProtectionEnabledForNewRepositoriesInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput"></a>

```typescript
public readonly secretScanningPushProtectionEnabledForNewRepositoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretScanningValidityChecksEnabledInput`<sup>Optional</sup> <a name="secretScanningValidityChecksEnabledInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabledInput"></a>

```typescript
public readonly secretScanningValidityChecksEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `advancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="advancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositories"></a>

```typescript
public readonly advancedSecurityEnabledForNewRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlug"></a>

```typescript
public readonly enterpriseSlug: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `secretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="secretScanningEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositories"></a>

```typescript
public readonly secretScanningEnabledForNewRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretScanningPushProtectionCustomLink`<sup>Required</sup> <a name="secretScanningPushProtectionCustomLink" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLink"></a>

```typescript
public readonly secretScanningPushProtectionCustomLink: string;
```

- *Type:* string

---

##### `secretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="secretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```typescript
public readonly secretScanningPushProtectionEnabledForNewRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretScanningValidityChecksEnabled`<sup>Required</sup> <a name="secretScanningValidityChecksEnabled" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabled"></a>

```typescript
public readonly secretScanningValidityChecksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseSecurityAnalysisSettingsConfig <a name="EnterpriseSecurityAnalysisSettingsConfig" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.Initializer"></a>

```typescript
import { enterpriseSecurityAnalysisSettings } from '@cdktf/provider-github'

const enterpriseSecurityAnalysisSettingsConfig: enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.enterpriseSlug">enterpriseSlug</a></code> | <code>string</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.advancedSecurityEnabledForNewRepositories">advancedSecurityEnabledForNewRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether GitHub Advanced Security is automatically enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#id EnterpriseSecurityAnalysisSettings#id}. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningEnabledForNewRepositories">secretScanningEnabledForNewRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether secret scanning is automatically enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionCustomLink">secretScanningPushProtectionCustomLink</a></code> | <code>string</code> | Custom URL for secret scanning push protection bypass instructions. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories">secretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether secret scanning push protection is automatically enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningValidityChecksEnabled">secretScanningValidityChecksEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether secret scanning validity checks are enabled. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enterpriseSlug`<sup>Required</sup> <a name="enterpriseSlug" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.enterpriseSlug"></a>

```typescript
public readonly enterpriseSlug: string;
```

- *Type:* string

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#enterprise_slug EnterpriseSecurityAnalysisSettings#enterprise_slug}

---

##### `advancedSecurityEnabledForNewRepositories`<sup>Optional</sup> <a name="advancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.advancedSecurityEnabledForNewRepositories"></a>

```typescript
public readonly advancedSecurityEnabledForNewRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether GitHub Advanced Security is automatically enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#advanced_security_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#advanced_security_enabled_for_new_repositories}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#id EnterpriseSecurityAnalysisSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secretScanningEnabledForNewRepositories`<sup>Optional</sup> <a name="secretScanningEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningEnabledForNewRepositories"></a>

```typescript
public readonly secretScanningEnabledForNewRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether secret scanning is automatically enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_enabled_for_new_repositories}

---

##### `secretScanningPushProtectionCustomLink`<sup>Optional</sup> <a name="secretScanningPushProtectionCustomLink" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionCustomLink"></a>

```typescript
public readonly secretScanningPushProtectionCustomLink: string;
```

- *Type:* string

Custom URL for secret scanning push protection bypass instructions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_custom_link EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_custom_link}

---

##### `secretScanningPushProtectionEnabledForNewRepositories`<sup>Optional</sup> <a name="secretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```typescript
public readonly secretScanningPushProtectionEnabledForNewRepositories: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether secret scanning push protection is automatically enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `secretScanningValidityChecksEnabled`<sup>Optional</sup> <a name="secretScanningValidityChecksEnabled" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningValidityChecksEnabled"></a>

```typescript
public readonly secretScanningValidityChecksEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether secret scanning validity checks are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_validity_checks_enabled EnterpriseSecurityAnalysisSettings#secret_scanning_validity_checks_enabled}

---



