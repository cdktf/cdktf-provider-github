# `enterpriseSecurityAnalysisSettings` Submodule <a name="`enterpriseSecurityAnalysisSettings` Submodule" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseSecurityAnalysisSettings <a name="EnterpriseSecurityAnalysisSettings" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings github_enterprise_security_analysis_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new EnterpriseSecurityAnalysisSettings(Construct Scope, string Id, EnterpriseSecurityAnalysisSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig">EnterpriseSecurityAnalysisSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig">EnterpriseSecurityAnalysisSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetAdvancedSecurityEnabledForNewRepositories">ResetAdvancedSecurityEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningEnabledForNewRepositories">ResetSecretScanningEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionCustomLink">ResetSecretScanningPushProtectionCustomLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionEnabledForNewRepositories">ResetSecretScanningPushProtectionEnabledForNewRepositories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningValidityChecksEnabled">ResetSecretScanningValidityChecksEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdvancedSecurityEnabledForNewRepositories` <a name="ResetAdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetAdvancedSecurityEnabledForNewRepositories"></a>

```csharp
private void ResetAdvancedSecurityEnabledForNewRepositories()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecretScanningEnabledForNewRepositories` <a name="ResetSecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningEnabledForNewRepositories"></a>

```csharp
private void ResetSecretScanningEnabledForNewRepositories()
```

##### `ResetSecretScanningPushProtectionCustomLink` <a name="ResetSecretScanningPushProtectionCustomLink" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionCustomLink"></a>

```csharp
private void ResetSecretScanningPushProtectionCustomLink()
```

##### `ResetSecretScanningPushProtectionEnabledForNewRepositories` <a name="ResetSecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
private void ResetSecretScanningPushProtectionEnabledForNewRepositories()
```

##### `ResetSecretScanningValidityChecksEnabled` <a name="ResetSecretScanningValidityChecksEnabled" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.resetSecretScanningValidityChecksEnabled"></a>

```csharp
private void ResetSecretScanningValidityChecksEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnterpriseSecurityAnalysisSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

EnterpriseSecurityAnalysisSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

EnterpriseSecurityAnalysisSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

EnterpriseSecurityAnalysisSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

EnterpriseSecurityAnalysisSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EnterpriseSecurityAnalysisSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EnterpriseSecurityAnalysisSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EnterpriseSecurityAnalysisSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseSecurityAnalysisSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositoriesInput">AdvancedSecurityEnabledForNewRepositoriesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlugInput">EnterpriseSlugInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositoriesInput">SecretScanningEnabledForNewRepositoriesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLinkInput">SecretScanningPushProtectionCustomLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput">SecretScanningPushProtectionEnabledForNewRepositoriesInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabledInput">SecretScanningValidityChecksEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLink">SecretScanningPushProtectionCustomLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabled">SecretScanningValidityChecksEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AdvancedSecurityEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositoriesInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositoriesInput"></a>

```csharp
public bool|IResolvable AdvancedSecurityEnabledForNewRepositoriesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnterpriseSlugInput`<sup>Optional</sup> <a name="EnterpriseSlugInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlugInput"></a>

```csharp
public string EnterpriseSlugInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SecretScanningEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositoriesInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositoriesInput"></a>

```csharp
public bool|IResolvable SecretScanningEnabledForNewRepositoriesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SecretScanningPushProtectionCustomLinkInput`<sup>Optional</sup> <a name="SecretScanningPushProtectionCustomLinkInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLinkInput"></a>

```csharp
public string SecretScanningPushProtectionCustomLinkInput { get; }
```

- *Type:* string

---

##### `SecretScanningPushProtectionEnabledForNewRepositoriesInput`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositoriesInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositoriesInput"></a>

```csharp
public bool|IResolvable SecretScanningPushProtectionEnabledForNewRepositoriesInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SecretScanningValidityChecksEnabledInput`<sup>Optional</sup> <a name="SecretScanningValidityChecksEnabledInput" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabledInput"></a>

```csharp
public bool|IResolvable SecretScanningValidityChecksEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Required</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.advancedSecurityEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable AdvancedSecurityEnabledForNewRepositories { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.enterpriseSlug"></a>

```csharp
public string EnterpriseSlug { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SecretScanningEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable SecretScanningEnabledForNewRepositories { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SecretScanningPushProtectionCustomLink`<sup>Required</sup> <a name="SecretScanningPushProtectionCustomLink" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionCustomLink"></a>

```csharp
public string SecretScanningPushProtectionCustomLink { get; }
```

- *Type:* string

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Required</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable SecretScanningPushProtectionEnabledForNewRepositories { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SecretScanningValidityChecksEnabled`<sup>Required</sup> <a name="SecretScanningValidityChecksEnabled" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.secretScanningValidityChecksEnabled"></a>

```csharp
public bool|IResolvable SecretScanningValidityChecksEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseSecurityAnalysisSettingsConfig <a name="EnterpriseSecurityAnalysisSettingsConfig" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new EnterpriseSecurityAnalysisSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EnterpriseSlug,
    bool|IResolvable AdvancedSecurityEnabledForNewRepositories = null,
    string Id = null,
    bool|IResolvable SecretScanningEnabledForNewRepositories = null,
    string SecretScanningPushProtectionCustomLink = null,
    bool|IResolvable SecretScanningPushProtectionEnabledForNewRepositories = null,
    bool|IResolvable SecretScanningValidityChecksEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.enterpriseSlug">EnterpriseSlug</a></code> | <code>string</code> | The slug of the enterprise. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.advancedSecurityEnabledForNewRepositories">AdvancedSecurityEnabledForNewRepositories</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether GitHub Advanced Security is automatically enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#id EnterpriseSecurityAnalysisSettings#id}. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningEnabledForNewRepositories">SecretScanningEnabledForNewRepositories</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether secret scanning is automatically enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionCustomLink">SecretScanningPushProtectionCustomLink</a></code> | <code>string</code> | Custom URL for secret scanning push protection bypass instructions. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories">SecretScanningPushProtectionEnabledForNewRepositories</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether secret scanning push protection is automatically enabled for new repositories. |
| <code><a href="#@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningValidityChecksEnabled">SecretScanningValidityChecksEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether secret scanning validity checks are enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EnterpriseSlug`<sup>Required</sup> <a name="EnterpriseSlug" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.enterpriseSlug"></a>

```csharp
public string EnterpriseSlug { get; set; }
```

- *Type:* string

The slug of the enterprise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#enterprise_slug EnterpriseSecurityAnalysisSettings#enterprise_slug}

---

##### `AdvancedSecurityEnabledForNewRepositories`<sup>Optional</sup> <a name="AdvancedSecurityEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.advancedSecurityEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable AdvancedSecurityEnabledForNewRepositories { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether GitHub Advanced Security is automatically enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#advanced_security_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#advanced_security_enabled_for_new_repositories}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#id EnterpriseSecurityAnalysisSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecretScanningEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable SecretScanningEnabledForNewRepositories { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether secret scanning is automatically enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_enabled_for_new_repositories}

---

##### `SecretScanningPushProtectionCustomLink`<sup>Optional</sup> <a name="SecretScanningPushProtectionCustomLink" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionCustomLink"></a>

```csharp
public string SecretScanningPushProtectionCustomLink { get; set; }
```

- *Type:* string

Custom URL for secret scanning push protection bypass instructions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_custom_link EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_custom_link}

---

##### `SecretScanningPushProtectionEnabledForNewRepositories`<sup>Optional</sup> <a name="SecretScanningPushProtectionEnabledForNewRepositories" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningPushProtectionEnabledForNewRepositories"></a>

```csharp
public bool|IResolvable SecretScanningPushProtectionEnabledForNewRepositories { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether secret scanning push protection is automatically enabled for new repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_push_protection_enabled_for_new_repositories EnterpriseSecurityAnalysisSettings#secret_scanning_push_protection_enabled_for_new_repositories}

---

##### `SecretScanningValidityChecksEnabled`<sup>Optional</sup> <a name="SecretScanningValidityChecksEnabled" id="@cdktf/provider-github.enterpriseSecurityAnalysisSettings.EnterpriseSecurityAnalysisSettingsConfig.property.secretScanningValidityChecksEnabled"></a>

```csharp
public bool|IResolvable SecretScanningValidityChecksEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether secret scanning validity checks are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/enterprise_security_analysis_settings#secret_scanning_validity_checks_enabled EnterpriseSecurityAnalysisSettings#secret_scanning_validity_checks_enabled}

---



