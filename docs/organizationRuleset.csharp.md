# `organizationRuleset` Submodule <a name="`organizationRuleset` Submodule" id="@cdktf/provider-github.organizationRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationRuleset <a name="OrganizationRuleset" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset github_organization_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRuleset(Construct Scope, string Id, OrganizationRulesetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig">OrganizationRulesetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig">OrganizationRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors">PutBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetBypassActors">ResetBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBypassActors` <a name="PutBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors"></a>

```csharp
private void PutBypassActors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putBypassActors.parameter.value"></a>

- *Type:* object

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions"></a>

```csharp
private void PutConditions(OrganizationRulesetConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules"></a>

```csharp
private void PutRules(OrganizationRulesetRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.putRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---

##### `ResetBypassActors` <a name="ResetBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetBypassActors"></a>

```csharp
private void ResetBypassActors()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

OrganizationRuleset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

OrganizationRuleset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

OrganizationRuleset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

OrganizationRuleset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationRuleset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActors">BypassActors</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList">OrganizationRulesetBypassActorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference">OrganizationRulesetConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference">OrganizationRulesetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesetId">RulesetId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActorsInput">BypassActorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditionsInput">ConditionsInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcementInput">EnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesInput">RulesInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcement">Enforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BypassActors`<sup>Required</sup> <a name="BypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActors"></a>

```csharp
public OrganizationRulesetBypassActorsList BypassActors { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList">OrganizationRulesetBypassActorsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditions"></a>

```csharp
public OrganizationRulesetConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference">OrganizationRulesetConditionsOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rules"></a>

```csharp
public OrganizationRulesetRulesOutputReference Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference">OrganizationRulesetRulesOutputReference</a>

---

##### `RulesetId`<sup>Required</sup> <a name="RulesetId" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesetId"></a>

```csharp
public double RulesetId { get; }
```

- *Type:* double

---

##### `BypassActorsInput`<sup>Optional</sup> <a name="BypassActorsInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.bypassActorsInput"></a>

```csharp
public object BypassActorsInput { get; }
```

- *Type:* object

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.conditionsInput"></a>

```csharp
public OrganizationRulesetConditions ConditionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---

##### `EnforcementInput`<sup>Optional</sup> <a name="EnforcementInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcementInput"></a>

```csharp
public string EnforcementInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.rulesInput"></a>

```csharp
public OrganizationRulesetRules RulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `Enforcement`<sup>Required</sup> <a name="Enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.enforcement"></a>

```csharp
public string Enforcement { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.organizationRuleset.OrganizationRuleset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationRulesetBypassActors <a name="OrganizationRulesetBypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetBypassActors {
    double ActorId,
    string ActorType,
    string BypassMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorId">ActorId</a></code> | <code>double</code> | The ID of the actor that can bypass a ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorType">ActorType</a></code> | <code>string</code> | The type of actor that can bypass a ruleset. Can be one of: `RepositoryRole`, `Team`, `Integration`, `OrganizationAdmin`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.bypassMode">BypassMode</a></code> | <code>string</code> | When the specified actor can bypass the ruleset. |

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorId"></a>

```csharp
public double ActorId { get; set; }
```

- *Type:* double

The ID of the actor that can bypass a ruleset.

When `actor_type` is `OrganizationAdmin`, this should be set to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#actor_id OrganizationRuleset#actor_id}

---

##### `ActorType`<sup>Required</sup> <a name="ActorType" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.actorType"></a>

```csharp
public string ActorType { get; set; }
```

- *Type:* string

The type of actor that can bypass a ruleset. Can be one of: `RepositoryRole`, `Team`, `Integration`, `OrganizationAdmin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#actor_type OrganizationRuleset#actor_type}

---

##### `BypassMode`<sup>Required</sup> <a name="BypassMode" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActors.property.bypassMode"></a>

```csharp
public string BypassMode { get; set; }
```

- *Type:* string

When the specified actor can bypass the ruleset.

pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#bypass_mode OrganizationRuleset#bypass_mode}

---

### OrganizationRulesetConditions <a name="OrganizationRulesetConditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetConditions {
    OrganizationRulesetConditionsRefName RefName,
    double[] RepositoryId = null,
    OrganizationRulesetConditionsRepositoryName RepositoryName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.refName">RefName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | ref_name block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryId">RepositoryId</a></code> | <code>double[]</code> | The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryName">RepositoryName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | repository_name block. |

---

##### `RefName`<sup>Required</sup> <a name="RefName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.refName"></a>

```csharp
public OrganizationRulesetConditionsRefName RefName { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

ref_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#ref_name OrganizationRuleset#ref_name}

---

##### `RepositoryId`<sup>Optional</sup> <a name="RepositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryId"></a>

```csharp
public double[] RepositoryId { get; set; }
```

- *Type:* double[]

The repository IDs that the ruleset applies to. One of these IDs must match for the condition to pass.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}

---

##### `RepositoryName`<sup>Optional</sup> <a name="RepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions.property.repositoryName"></a>

```csharp
public OrganizationRulesetConditionsRepositoryName RepositoryName { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

repository_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#repository_name OrganizationRuleset#repository_name}

---

### OrganizationRulesetConditionsRefName <a name="OrganizationRulesetConditionsRefName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetConditionsRefName {
    string[] Exclude,
    string[] Include
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.exclude">Exclude</a></code> | <code>string[]</code> | Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.include">Include</a></code> | <code>string[]</code> | Array of ref names or patterns to include. |

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.exclude"></a>

```csharp
public string[] Exclude { get; set; }
```

- *Type:* string[]

Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName.property.include"></a>

```csharp
public string[] Include { get; set; }
```

- *Type:* string[]

Array of ref names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

### OrganizationRulesetConditionsRepositoryName <a name="OrganizationRulesetConditionsRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetConditionsRepositoryName {
    string[] Exclude,
    string[] Include,
    object Protected = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.exclude">Exclude</a></code> | <code>string[]</code> | Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.include">Include</a></code> | <code>string[]</code> | Array of repository names or patterns to include. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.protected">Protected</a></code> | <code>object</code> | Whether renaming of target repositories is prevented. |

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.exclude"></a>

```csharp
public string[] Exclude { get; set; }
```

- *Type:* string[]

Array of repository names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#exclude OrganizationRuleset#exclude}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.include"></a>

```csharp
public string[] Include { get; set; }
```

- *Type:* string[]

Array of repository names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~ALL` to include all repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#include OrganizationRuleset#include}

---

##### `Protected`<sup>Optional</sup> <a name="Protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName.property.protected"></a>

```csharp
public object Protected { get; set; }
```

- *Type:* object

Whether renaming of target repositories is prevented.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#protected OrganizationRuleset#protected}

---

### OrganizationRulesetConfig <a name="OrganizationRulesetConfig" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Enforcement,
    string Name,
    OrganizationRulesetRules Rules,
    string Target,
    object BypassActors = null,
    OrganizationRulesetConditions Conditions = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.enforcement">Enforcement</a></code> | <code>string</code> | Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.name">Name</a></code> | <code>string</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | rules block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.target">Target</a></code> | <code>string</code> | Possible values are `branch` and `tag`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.bypassActors">BypassActors</a></code> | <code>object</code> | bypass_actors block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enforcement`<sup>Required</sup> <a name="Enforcement" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.enforcement"></a>

```csharp
public string Enforcement { get; set; }
```

- *Type:* string

Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#enforcement OrganizationRuleset#enforcement}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.rules"></a>

```csharp
public OrganizationRulesetRules Rules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#rules OrganizationRuleset#rules}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Possible values are `branch` and `tag`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#target OrganizationRuleset#target}

---

##### `BypassActors`<sup>Optional</sup> <a name="BypassActors" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.bypassActors"></a>

```csharp
public object BypassActors { get; set; }
```

- *Type:* object

bypass_actors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#bypass_actors OrganizationRuleset#bypass_actors}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.conditions"></a>

```csharp
public OrganizationRulesetConditions Conditions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#conditions OrganizationRuleset#conditions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#id OrganizationRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationRulesetRules <a name="OrganizationRulesetRules" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRules {
    OrganizationRulesetRulesBranchNamePattern BranchNamePattern = null,
    OrganizationRulesetRulesCommitAuthorEmailPattern CommitAuthorEmailPattern = null,
    OrganizationRulesetRulesCommitMessagePattern CommitMessagePattern = null,
    OrganizationRulesetRulesCommitterEmailPattern CommitterEmailPattern = null,
    object Creation = null,
    object Deletion = null,
    object NonFastForward = null,
    OrganizationRulesetRulesPullRequest PullRequest = null,
    object RequiredLinearHistory = null,
    object RequiredSignatures = null,
    OrganizationRulesetRulesRequiredStatusChecks RequiredStatusChecks = null,
    OrganizationRulesetRulesRequiredWorkflows RequiredWorkflows = null,
    OrganizationRulesetRulesTagNamePattern TagNamePattern = null,
    object Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.branchNamePattern">BranchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | branch_name_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitAuthorEmailPattern">CommitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | commit_author_email_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitMessagePattern">CommitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | commit_message_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.committerEmailPattern">CommitterEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | committer_email_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.creation">Creation</a></code> | <code>object</code> | Only allow users with bypass permission to create matching refs. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.deletion">Deletion</a></code> | <code>object</code> | Only allow users with bypass permissions to delete matching refs. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.nonFastForward">NonFastForward</a></code> | <code>object</code> | Prevent users with push access from force pushing to branches. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>object</code> | Prevent merge commits from being pushed to matching branches. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredSignatures">RequiredSignatures</a></code> | <code>object</code> | Commits pushed to matching branches must have verified signatures. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredWorkflows">RequiredWorkflows</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | required_workflows block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.tagNamePattern">TagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | tag_name_pattern block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.update">Update</a></code> | <code>object</code> | Only allow users with bypass permission to update matching refs. |

---

##### `BranchNamePattern`<sup>Optional</sup> <a name="BranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.branchNamePattern"></a>

```csharp
public OrganizationRulesetRulesBranchNamePattern BranchNamePattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

branch_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#branch_name_pattern OrganizationRuleset#branch_name_pattern}

---

##### `CommitAuthorEmailPattern`<sup>Optional</sup> <a name="CommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitAuthorEmailPattern"></a>

```csharp
public OrganizationRulesetRulesCommitAuthorEmailPattern CommitAuthorEmailPattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

commit_author_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#commit_author_email_pattern OrganizationRuleset#commit_author_email_pattern}

---

##### `CommitMessagePattern`<sup>Optional</sup> <a name="CommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.commitMessagePattern"></a>

```csharp
public OrganizationRulesetRulesCommitMessagePattern CommitMessagePattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

commit_message_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#commit_message_pattern OrganizationRuleset#commit_message_pattern}

---

##### `CommitterEmailPattern`<sup>Optional</sup> <a name="CommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.committerEmailPattern"></a>

```csharp
public OrganizationRulesetRulesCommitterEmailPattern CommitterEmailPattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

committer_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#committer_email_pattern OrganizationRuleset#committer_email_pattern}

---

##### `Creation`<sup>Optional</sup> <a name="Creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.creation"></a>

```csharp
public object Creation { get; set; }
```

- *Type:* object

Only allow users with bypass permission to create matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#creation OrganizationRuleset#creation}

---

##### `Deletion`<sup>Optional</sup> <a name="Deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.deletion"></a>

```csharp
public object Deletion { get; set; }
```

- *Type:* object

Only allow users with bypass permissions to delete matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#deletion OrganizationRuleset#deletion}

---

##### `NonFastForward`<sup>Optional</sup> <a name="NonFastForward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.nonFastForward"></a>

```csharp
public object NonFastForward { get; set; }
```

- *Type:* object

Prevent users with push access from force pushing to branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#non_fast_forward OrganizationRuleset#non_fast_forward}

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.pullRequest"></a>

```csharp
public OrganizationRulesetRulesPullRequest PullRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#pull_request OrganizationRuleset#pull_request}

---

##### `RequiredLinearHistory`<sup>Optional</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredLinearHistory"></a>

```csharp
public object RequiredLinearHistory { get; set; }
```

- *Type:* object

Prevent merge commits from being pushed to matching branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#required_linear_history OrganizationRuleset#required_linear_history}

---

##### `RequiredSignatures`<sup>Optional</sup> <a name="RequiredSignatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredSignatures"></a>

```csharp
public object RequiredSignatures { get; set; }
```

- *Type:* object

Commits pushed to matching branches must have verified signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#required_signatures OrganizationRuleset#required_signatures}

---

##### `RequiredStatusChecks`<sup>Optional</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredStatusChecks"></a>

```csharp
public OrganizationRulesetRulesRequiredStatusChecks RequiredStatusChecks { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#required_status_checks OrganizationRuleset#required_status_checks}

---

##### `RequiredWorkflows`<sup>Optional</sup> <a name="RequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.requiredWorkflows"></a>

```csharp
public OrganizationRulesetRulesRequiredWorkflows RequiredWorkflows { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

required_workflows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#required_workflows OrganizationRuleset#required_workflows}

---

##### `TagNamePattern`<sup>Optional</sup> <a name="TagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.tagNamePattern"></a>

```csharp
public OrganizationRulesetRulesTagNamePattern TagNamePattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

tag_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#tag_name_pattern OrganizationRuleset#tag_name_pattern}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules.property.update"></a>

```csharp
public object Update { get; set; }
```

- *Type:* object

Only allow users with bypass permission to update matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#update OrganizationRuleset#update}

---

### OrganizationRulesetRulesBranchNamePattern <a name="OrganizationRulesetRulesBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesBranchNamePattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitAuthorEmailPattern <a name="OrganizationRulesetRulesCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesCommitAuthorEmailPattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitMessagePattern <a name="OrganizationRulesetRulesCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesCommitMessagePattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesCommitterEmailPattern <a name="OrganizationRulesetRulesCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesCommitterEmailPattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

### OrganizationRulesetRulesPullRequest <a name="OrganizationRulesetRulesPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesPullRequest {
    object DismissStaleReviewsOnPush = null,
    object RequireCodeOwnerReview = null,
    double RequiredApprovingReviewCount = null,
    object RequiredReviewThreadResolution = null,
    object RequireLastPushApproval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.dismissStaleReviewsOnPush">DismissStaleReviewsOnPush</a></code> | <code>object</code> | New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireCodeOwnerReview">RequireCodeOwnerReview</a></code> | <code>object</code> | Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | The number of approving reviews that are required before a pull request can be merged. Defaults to `0`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredReviewThreadResolution">RequiredReviewThreadResolution</a></code> | <code>object</code> | All conversations on code must be resolved before a pull request can be merged. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>object</code> | Whether the most recent reviewable push must be approved by someone other than the person who pushed it. |

---

##### `DismissStaleReviewsOnPush`<sup>Optional</sup> <a name="DismissStaleReviewsOnPush" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.dismissStaleReviewsOnPush"></a>

```csharp
public object DismissStaleReviewsOnPush { get; set; }
```

- *Type:* object

New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#dismiss_stale_reviews_on_push OrganizationRuleset#dismiss_stale_reviews_on_push}

---

##### `RequireCodeOwnerReview`<sup>Optional</sup> <a name="RequireCodeOwnerReview" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireCodeOwnerReview"></a>

```csharp
public object RequireCodeOwnerReview { get; set; }
```

- *Type:* object

Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#require_code_owner_review OrganizationRuleset#require_code_owner_review}

---

##### `RequiredApprovingReviewCount`<sup>Optional</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; set; }
```

- *Type:* double

The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#required_approving_review_count OrganizationRuleset#required_approving_review_count}

---

##### `RequiredReviewThreadResolution`<sup>Optional</sup> <a name="RequiredReviewThreadResolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requiredReviewThreadResolution"></a>

```csharp
public object RequiredReviewThreadResolution { get; set; }
```

- *Type:* object

All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#required_review_thread_resolution OrganizationRuleset#required_review_thread_resolution}

---

##### `RequireLastPushApproval`<sup>Optional</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest.property.requireLastPushApproval"></a>

```csharp
public object RequireLastPushApproval { get; set; }
```

- *Type:* object

Whether the most recent reviewable push must be approved by someone other than the person who pushed it.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#require_last_push_approval OrganizationRuleset#require_last_push_approval}

---

### OrganizationRulesetRulesRequiredStatusChecks <a name="OrganizationRulesetRulesRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredStatusChecks {
    object RequiredCheck,
    object StrictRequiredStatusChecksPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.requiredCheck">RequiredCheck</a></code> | <code>object</code> | required_check block. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy">StrictRequiredStatusChecksPolicy</a></code> | <code>object</code> | Whether pull requests targeting a matching branch must be tested with the latest code. |

---

##### `RequiredCheck`<sup>Required</sup> <a name="RequiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.requiredCheck"></a>

```csharp
public object RequiredCheck { get; set; }
```

- *Type:* object

required_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#required_check OrganizationRuleset#required_check}

---

##### `StrictRequiredStatusChecksPolicy`<sup>Optional</sup> <a name="StrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy"></a>

```csharp
public object StrictRequiredStatusChecksPolicy { get; set; }
```

- *Type:* object

Whether pull requests targeting a matching branch must be tested with the latest code.

This setting will not take effect unless at least one status check is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#strict_required_status_checks_policy OrganizationRuleset#strict_required_status_checks_policy}

---

### OrganizationRulesetRulesRequiredStatusChecksRequiredCheck <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredStatusChecksRequiredCheck {
    string Context,
    double IntegrationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.context">Context</a></code> | <code>string</code> | The status check context name that must be present on the commit. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId">IntegrationId</a></code> | <code>double</code> | The optional integration ID that this status check must originate from. |

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

The status check context name that must be present on the commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#context OrganizationRuleset#context}

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId"></a>

```csharp
public double IntegrationId { get; set; }
```

- *Type:* double

The optional integration ID that this status check must originate from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#integration_id OrganizationRuleset#integration_id}

---

### OrganizationRulesetRulesRequiredWorkflows <a name="OrganizationRulesetRulesRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredWorkflows {
    object RequiredWorkflow
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.requiredWorkflow">RequiredWorkflow</a></code> | <code>object</code> | required_workflow block. |

---

##### `RequiredWorkflow`<sup>Required</sup> <a name="RequiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows.property.requiredWorkflow"></a>

```csharp
public object RequiredWorkflow { get; set; }
```

- *Type:* object

required_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#required_workflow OrganizationRuleset#required_workflow}

---

### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow {
    string Path,
    double RepositoryId,
    string Ref = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.path">Path</a></code> | <code>string</code> | The path to the workflow YAML definition file. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.repositoryId">RepositoryId</a></code> | <code>double</code> | The repository in which the workflow is defined. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.ref">Ref</a></code> | <code>string</code> | The ref (branch or tag) of the workflow file to use. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The path to the workflow YAML definition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#path OrganizationRuleset#path}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.repositoryId"></a>

```csharp
public double RepositoryId { get; set; }
```

- *Type:* double

The repository in which the workflow is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#repository_id OrganizationRuleset#repository_id}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflow.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

The ref (branch or tag) of the workflow file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#ref OrganizationRuleset#ref}

---

### OrganizationRulesetRulesTagNamePattern <a name="OrganizationRulesetRulesTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesTagNamePattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#operator OrganizationRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#pattern OrganizationRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#name OrganizationRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.45.0/docs/resources/organization_ruleset#negate OrganizationRuleset#negate}

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationRulesetBypassActorsList <a name="OrganizationRulesetBypassActorsList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetBypassActorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get"></a>

```csharp
private OrganizationRulesetBypassActorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationRulesetBypassActorsOutputReference <a name="OrganizationRulesetBypassActorsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetBypassActorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorIdInput">ActorIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorTypeInput">ActorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassModeInput">BypassModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorId">ActorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorType">ActorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassMode">BypassMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorIdInput"></a>

```csharp
public double ActorIdInput { get; }
```

- *Type:* double

---

##### `ActorTypeInput`<sup>Optional</sup> <a name="ActorTypeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorTypeInput"></a>

```csharp
public string ActorTypeInput { get; }
```

- *Type:* string

---

##### `BypassModeInput`<sup>Optional</sup> <a name="BypassModeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassModeInput"></a>

```csharp
public string BypassModeInput { get; }
```

- *Type:* string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorId"></a>

```csharp
public double ActorId { get; }
```

- *Type:* double

---

##### `ActorType`<sup>Required</sup> <a name="ActorType" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.actorType"></a>

```csharp
public string ActorType { get; }
```

- *Type:* string

---

##### `BypassMode`<sup>Required</sup> <a name="BypassMode" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.bypassMode"></a>

```csharp
public string BypassMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetBypassActorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationRulesetConditionsOutputReference <a name="OrganizationRulesetConditionsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName">PutRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName">PutRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryId">ResetRepositoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryName">ResetRepositoryName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRefName` <a name="PutRefName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName"></a>

```csharp
private void PutRefName(OrganizationRulesetConditionsRefName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRefName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---

##### `PutRepositoryName` <a name="PutRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName"></a>

```csharp
private void PutRepositoryName(OrganizationRulesetConditionsRepositoryName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.putRepositoryName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---

##### `ResetRepositoryId` <a name="ResetRepositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryId"></a>

```csharp
private void ResetRepositoryId()
```

##### `ResetRepositoryName` <a name="ResetRepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.resetRepositoryName"></a>

```csharp
private void ResetRepositoryName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refName">RefName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference">OrganizationRulesetConditionsRefNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryName">RepositoryName</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference">OrganizationRulesetConditionsRepositoryNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refNameInput">RefNameInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryNameInput">RepositoryNameInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryId">RepositoryId</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RefName`<sup>Required</sup> <a name="RefName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refName"></a>

```csharp
public OrganizationRulesetConditionsRefNameOutputReference RefName { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference">OrganizationRulesetConditionsRefNameOutputReference</a>

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryName"></a>

```csharp
public OrganizationRulesetConditionsRepositoryNameOutputReference RepositoryName { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference">OrganizationRulesetConditionsRepositoryNameOutputReference</a>

---

##### `RefNameInput`<sup>Optional</sup> <a name="RefNameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.refNameInput"></a>

```csharp
public OrganizationRulesetConditionsRefName RefNameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryIdInput"></a>

```csharp
public double[] RepositoryIdInput { get; }
```

- *Type:* double[]

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryNameInput"></a>

```csharp
public OrganizationRulesetConditionsRepositoryName RepositoryNameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.repositoryId"></a>

```csharp
public double[] RepositoryId { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditions">OrganizationRulesetConditions</a>

---


### OrganizationRulesetConditionsRefNameOutputReference <a name="OrganizationRulesetConditionsRefNameOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetConditionsRefNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.includeInput">IncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.exclude">Exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.excludeInput"></a>

```csharp
public string[] ExcludeInput { get; }
```

- *Type:* string[]

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.includeInput"></a>

```csharp
public string[] IncludeInput { get; }
```

- *Type:* string[]

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.exclude"></a>

```csharp
public string[] Exclude { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefNameOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetConditionsRefName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRefName">OrganizationRulesetConditionsRefName</a>

---


### OrganizationRulesetConditionsRepositoryNameOutputReference <a name="OrganizationRulesetConditionsRepositoryNameOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetConditionsRepositoryNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resetProtected">ResetProtected</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtected` <a name="ResetProtected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.resetProtected"></a>

```csharp
private void ResetProtected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.includeInput">IncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protectedInput">ProtectedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.exclude">Exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protected">Protected</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.excludeInput"></a>

```csharp
public string[] ExcludeInput { get; }
```

- *Type:* string[]

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.includeInput"></a>

```csharp
public string[] IncludeInput { get; }
```

- *Type:* string[]

---

##### `ProtectedInput`<sup>Optional</sup> <a name="ProtectedInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protectedInput"></a>

```csharp
public object ProtectedInput { get; }
```

- *Type:* object

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.exclude"></a>

```csharp
public string[] Exclude { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `Protected`<sup>Required</sup> <a name="Protected" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.protected"></a>

```csharp
public object Protected { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryNameOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetConditionsRepositoryName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetConditionsRepositoryName">OrganizationRulesetConditionsRepositoryName</a>

---


### OrganizationRulesetRulesBranchNamePatternOutputReference <a name="OrganizationRulesetRulesBranchNamePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesBranchNamePatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetRulesBranchNamePattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---


### OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference <a name="OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetRulesCommitAuthorEmailPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---


### OrganizationRulesetRulesCommitMessagePatternOutputReference <a name="OrganizationRulesetRulesCommitMessagePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesCommitMessagePatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetRulesCommitMessagePattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---


### OrganizationRulesetRulesCommitterEmailPatternOutputReference <a name="OrganizationRulesetRulesCommitterEmailPatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesCommitterEmailPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetRulesCommitterEmailPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---


### OrganizationRulesetRulesOutputReference <a name="OrganizationRulesetRulesOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern">PutBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern">PutCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern">PutCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern">PutCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks">PutRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows">PutRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern">PutTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetBranchNamePattern">ResetBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitAuthorEmailPattern">ResetCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitMessagePattern">ResetCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitterEmailPattern">ResetCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCreation">ResetCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetDeletion">ResetDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetNonFastForward">ResetNonFastForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredLinearHistory">ResetRequiredLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredSignatures">ResetRequiredSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredStatusChecks">ResetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredWorkflows">ResetRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetTagNamePattern">ResetTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBranchNamePattern` <a name="PutBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern"></a>

```csharp
private void PutBranchNamePattern(OrganizationRulesetRulesBranchNamePattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putBranchNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---

##### `PutCommitAuthorEmailPattern` <a name="PutCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern"></a>

```csharp
private void PutCommitAuthorEmailPattern(OrganizationRulesetRulesCommitAuthorEmailPattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---

##### `PutCommitMessagePattern` <a name="PutCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern"></a>

```csharp
private void PutCommitMessagePattern(OrganizationRulesetRulesCommitMessagePattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitMessagePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---

##### `PutCommitterEmailPattern` <a name="PutCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern"></a>

```csharp
private void PutCommitterEmailPattern(OrganizationRulesetRulesCommitterEmailPattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putCommitterEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest"></a>

```csharp
private void PutPullRequest(OrganizationRulesetRulesPullRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---

##### `PutRequiredStatusChecks` <a name="PutRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks"></a>

```csharp
private void PutRequiredStatusChecks(OrganizationRulesetRulesRequiredStatusChecks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---

##### `PutRequiredWorkflows` <a name="PutRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows"></a>

```csharp
private void PutRequiredWorkflows(OrganizationRulesetRulesRequiredWorkflows Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putRequiredWorkflows.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---

##### `PutTagNamePattern` <a name="PutTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern"></a>

```csharp
private void PutTagNamePattern(OrganizationRulesetRulesTagNamePattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.putTagNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---

##### `ResetBranchNamePattern` <a name="ResetBranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetBranchNamePattern"></a>

```csharp
private void ResetBranchNamePattern()
```

##### `ResetCommitAuthorEmailPattern` <a name="ResetCommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitAuthorEmailPattern"></a>

```csharp
private void ResetCommitAuthorEmailPattern()
```

##### `ResetCommitMessagePattern` <a name="ResetCommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitMessagePattern"></a>

```csharp
private void ResetCommitMessagePattern()
```

##### `ResetCommitterEmailPattern` <a name="ResetCommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCommitterEmailPattern"></a>

```csharp
private void ResetCommitterEmailPattern()
```

##### `ResetCreation` <a name="ResetCreation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetCreation"></a>

```csharp
private void ResetCreation()
```

##### `ResetDeletion` <a name="ResetDeletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetDeletion"></a>

```csharp
private void ResetDeletion()
```

##### `ResetNonFastForward` <a name="ResetNonFastForward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetNonFastForward"></a>

```csharp
private void ResetNonFastForward()
```

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetPullRequest"></a>

```csharp
private void ResetPullRequest()
```

##### `ResetRequiredLinearHistory` <a name="ResetRequiredLinearHistory" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredLinearHistory"></a>

```csharp
private void ResetRequiredLinearHistory()
```

##### `ResetRequiredSignatures` <a name="ResetRequiredSignatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredSignatures"></a>

```csharp
private void ResetRequiredSignatures()
```

##### `ResetRequiredStatusChecks` <a name="ResetRequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredStatusChecks"></a>

```csharp
private void ResetRequiredStatusChecks()
```

##### `ResetRequiredWorkflows` <a name="ResetRequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetRequiredWorkflows"></a>

```csharp
private void ResetRequiredWorkflows()
```

##### `ResetTagNamePattern` <a name="ResetTagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetTagNamePattern"></a>

```csharp
private void ResetTagNamePattern()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePattern">BranchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference">OrganizationRulesetRulesBranchNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPattern">CommitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference">OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePattern">CommitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference">OrganizationRulesetRulesCommitMessagePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPattern">CommitterEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference">OrganizationRulesetRulesCommitterEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference">OrganizationRulesetRulesPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference">OrganizationRulesetRulesRequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflows">RequiredWorkflows</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference">OrganizationRulesetRulesRequiredWorkflowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePattern">TagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference">OrganizationRulesetRulesTagNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePatternInput">BranchNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPatternInput">CommitAuthorEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePatternInput">CommitMessagePatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPatternInput">CommitterEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationInput">CreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletionInput">DeletionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForwardInput">NonFastForwardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistoryInput">RequiredLinearHistoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignaturesInput">RequiredSignaturesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecksInput">RequiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflowsInput">RequiredWorkflowsInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePatternInput">TagNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.updateInput">UpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creation">Creation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletion">Deletion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForward">NonFastForward</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignatures">RequiredSignatures</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.update">Update</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchNamePattern`<sup>Required</sup> <a name="BranchNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePattern"></a>

```csharp
public OrganizationRulesetRulesBranchNamePatternOutputReference BranchNamePattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePatternOutputReference">OrganizationRulesetRulesBranchNamePatternOutputReference</a>

---

##### `CommitAuthorEmailPattern`<sup>Required</sup> <a name="CommitAuthorEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPattern"></a>

```csharp
public OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference CommitAuthorEmailPattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference">OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference</a>

---

##### `CommitMessagePattern`<sup>Required</sup> <a name="CommitMessagePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePattern"></a>

```csharp
public OrganizationRulesetRulesCommitMessagePatternOutputReference CommitMessagePattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePatternOutputReference">OrganizationRulesetRulesCommitMessagePatternOutputReference</a>

---

##### `CommitterEmailPattern`<sup>Required</sup> <a name="CommitterEmailPattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPattern"></a>

```csharp
public OrganizationRulesetRulesCommitterEmailPatternOutputReference CommitterEmailPattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPatternOutputReference">OrganizationRulesetRulesCommitterEmailPatternOutputReference</a>

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequest"></a>

```csharp
public OrganizationRulesetRulesPullRequestOutputReference PullRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference">OrganizationRulesetRulesPullRequestOutputReference</a>

---

##### `RequiredStatusChecks`<sup>Required</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecks"></a>

```csharp
public OrganizationRulesetRulesRequiredStatusChecksOutputReference RequiredStatusChecks { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference">OrganizationRulesetRulesRequiredStatusChecksOutputReference</a>

---

##### `RequiredWorkflows`<sup>Required</sup> <a name="RequiredWorkflows" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflows"></a>

```csharp
public OrganizationRulesetRulesRequiredWorkflowsOutputReference RequiredWorkflows { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference">OrganizationRulesetRulesRequiredWorkflowsOutputReference</a>

---

##### `TagNamePattern`<sup>Required</sup> <a name="TagNamePattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePattern"></a>

```csharp
public OrganizationRulesetRulesTagNamePatternOutputReference TagNamePattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference">OrganizationRulesetRulesTagNamePatternOutputReference</a>

---

##### `BranchNamePatternInput`<sup>Optional</sup> <a name="BranchNamePatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.branchNamePatternInput"></a>

```csharp
public OrganizationRulesetRulesBranchNamePattern BranchNamePatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesBranchNamePattern">OrganizationRulesetRulesBranchNamePattern</a>

---

##### `CommitAuthorEmailPatternInput`<sup>Optional</sup> <a name="CommitAuthorEmailPatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitAuthorEmailPatternInput"></a>

```csharp
public OrganizationRulesetRulesCommitAuthorEmailPattern CommitAuthorEmailPatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitAuthorEmailPattern">OrganizationRulesetRulesCommitAuthorEmailPattern</a>

---

##### `CommitMessagePatternInput`<sup>Optional</sup> <a name="CommitMessagePatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.commitMessagePatternInput"></a>

```csharp
public OrganizationRulesetRulesCommitMessagePattern CommitMessagePatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitMessagePattern">OrganizationRulesetRulesCommitMessagePattern</a>

---

##### `CommitterEmailPatternInput`<sup>Optional</sup> <a name="CommitterEmailPatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.committerEmailPatternInput"></a>

```csharp
public OrganizationRulesetRulesCommitterEmailPattern CommitterEmailPatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesCommitterEmailPattern">OrganizationRulesetRulesCommitterEmailPattern</a>

---

##### `CreationInput`<sup>Optional</sup> <a name="CreationInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creationInput"></a>

```csharp
public object CreationInput { get; }
```

- *Type:* object

---

##### `DeletionInput`<sup>Optional</sup> <a name="DeletionInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletionInput"></a>

```csharp
public object DeletionInput { get; }
```

- *Type:* object

---

##### `NonFastForwardInput`<sup>Optional</sup> <a name="NonFastForwardInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForwardInput"></a>

```csharp
public object NonFastForwardInput { get; }
```

- *Type:* object

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.pullRequestInput"></a>

```csharp
public OrganizationRulesetRulesPullRequest PullRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---

##### `RequiredLinearHistoryInput`<sup>Optional</sup> <a name="RequiredLinearHistoryInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistoryInput"></a>

```csharp
public object RequiredLinearHistoryInput { get; }
```

- *Type:* object

---

##### `RequiredSignaturesInput`<sup>Optional</sup> <a name="RequiredSignaturesInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignaturesInput"></a>

```csharp
public object RequiredSignaturesInput { get; }
```

- *Type:* object

---

##### `RequiredStatusChecksInput`<sup>Optional</sup> <a name="RequiredStatusChecksInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredStatusChecksInput"></a>

```csharp
public OrganizationRulesetRulesRequiredStatusChecks RequiredStatusChecksInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---

##### `RequiredWorkflowsInput`<sup>Optional</sup> <a name="RequiredWorkflowsInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredWorkflowsInput"></a>

```csharp
public OrganizationRulesetRulesRequiredWorkflows RequiredWorkflowsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---

##### `TagNamePatternInput`<sup>Optional</sup> <a name="TagNamePatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.tagNamePatternInput"></a>

```csharp
public OrganizationRulesetRulesTagNamePattern TagNamePatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.updateInput"></a>

```csharp
public object UpdateInput { get; }
```

- *Type:* object

---

##### `Creation`<sup>Required</sup> <a name="Creation" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.creation"></a>

```csharp
public object Creation { get; }
```

- *Type:* object

---

##### `Deletion`<sup>Required</sup> <a name="Deletion" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.deletion"></a>

```csharp
public object Deletion { get; }
```

- *Type:* object

---

##### `NonFastForward`<sup>Required</sup> <a name="NonFastForward" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.nonFastForward"></a>

```csharp
public object NonFastForward { get; }
```

- *Type:* object

---

##### `RequiredLinearHistory`<sup>Required</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredLinearHistory"></a>

```csharp
public object RequiredLinearHistory { get; }
```

- *Type:* object

---

##### `RequiredSignatures`<sup>Required</sup> <a name="RequiredSignatures" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.requiredSignatures"></a>

```csharp
public object RequiredSignatures { get; }
```

- *Type:* object

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.update"></a>

```csharp
public object Update { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRules">OrganizationRulesetRules</a>

---


### OrganizationRulesetRulesPullRequestOutputReference <a name="OrganizationRulesetRulesPullRequestOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesPullRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush">ResetDismissStaleReviewsOnPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview">ResetRequireCodeOwnerReview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount">ResetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution">ResetRequiredReviewThreadResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval">ResetRequireLastPushApproval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDismissStaleReviewsOnPush` <a name="ResetDismissStaleReviewsOnPush" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush"></a>

```csharp
private void ResetDismissStaleReviewsOnPush()
```

##### `ResetRequireCodeOwnerReview` <a name="ResetRequireCodeOwnerReview" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview"></a>

```csharp
private void ResetRequireCodeOwnerReview()
```

##### `ResetRequiredApprovingReviewCount` <a name="ResetRequiredApprovingReviewCount" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount"></a>

```csharp
private void ResetRequiredApprovingReviewCount()
```

##### `ResetRequiredReviewThreadResolution` <a name="ResetRequiredReviewThreadResolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution"></a>

```csharp
private void ResetRequiredReviewThreadResolution()
```

##### `ResetRequireLastPushApproval` <a name="ResetRequireLastPushApproval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval"></a>

```csharp
private void ResetRequireLastPushApproval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput">DismissStaleReviewsOnPushInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput">RequireCodeOwnerReviewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput">RequiredApprovingReviewCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput">RequiredReviewThreadResolutionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput">RequireLastPushApprovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush">DismissStaleReviewsOnPush</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview">RequireCodeOwnerReview</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution">RequiredReviewThreadResolution</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DismissStaleReviewsOnPushInput`<sup>Optional</sup> <a name="DismissStaleReviewsOnPushInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput"></a>

```csharp
public object DismissStaleReviewsOnPushInput { get; }
```

- *Type:* object

---

##### `RequireCodeOwnerReviewInput`<sup>Optional</sup> <a name="RequireCodeOwnerReviewInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput"></a>

```csharp
public object RequireCodeOwnerReviewInput { get; }
```

- *Type:* object

---

##### `RequiredApprovingReviewCountInput`<sup>Optional</sup> <a name="RequiredApprovingReviewCountInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput"></a>

```csharp
public double RequiredApprovingReviewCountInput { get; }
```

- *Type:* double

---

##### `RequiredReviewThreadResolutionInput`<sup>Optional</sup> <a name="RequiredReviewThreadResolutionInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput"></a>

```csharp
public object RequiredReviewThreadResolutionInput { get; }
```

- *Type:* object

---

##### `RequireLastPushApprovalInput`<sup>Optional</sup> <a name="RequireLastPushApprovalInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput"></a>

```csharp
public object RequireLastPushApprovalInput { get; }
```

- *Type:* object

---

##### `DismissStaleReviewsOnPush`<sup>Required</sup> <a name="DismissStaleReviewsOnPush" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush"></a>

```csharp
public object DismissStaleReviewsOnPush { get; }
```

- *Type:* object

---

##### `RequireCodeOwnerReview`<sup>Required</sup> <a name="RequireCodeOwnerReview" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview"></a>

```csharp
public object RequireCodeOwnerReview { get; }
```

- *Type:* object

---

##### `RequiredApprovingReviewCount`<sup>Required</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; }
```

- *Type:* double

---

##### `RequiredReviewThreadResolution`<sup>Required</sup> <a name="RequiredReviewThreadResolution" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution"></a>

```csharp
public object RequiredReviewThreadResolution { get; }
```

- *Type:* object

---

##### `RequireLastPushApproval`<sup>Required</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.requireLastPushApproval"></a>

```csharp
public object RequireLastPushApproval { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequestOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetRulesPullRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesPullRequest">OrganizationRulesetRulesPullRequest</a>

---


### OrganizationRulesetRulesRequiredStatusChecksOutputReference <a name="OrganizationRulesetRulesRequiredStatusChecksOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredStatusChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck">PutRequiredCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy">ResetStrictRequiredStatusChecksPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequiredCheck` <a name="PutRequiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck"></a>

```csharp
private void PutRequiredCheck(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck.parameter.value"></a>

- *Type:* object

---

##### `ResetStrictRequiredStatusChecksPolicy` <a name="ResetStrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy"></a>

```csharp
private void ResetStrictRequiredStatusChecksPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck">RequiredCheck</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList">OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput">RequiredCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput">StrictRequiredStatusChecksPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy">StrictRequiredStatusChecksPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequiredCheck`<sup>Required</sup> <a name="RequiredCheck" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck"></a>

```csharp
public OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList RequiredCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList">OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList</a>

---

##### `RequiredCheckInput`<sup>Optional</sup> <a name="RequiredCheckInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput"></a>

```csharp
public object RequiredCheckInput { get; }
```

- *Type:* object

---

##### `StrictRequiredStatusChecksPolicyInput`<sup>Optional</sup> <a name="StrictRequiredStatusChecksPolicyInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput"></a>

```csharp
public object StrictRequiredStatusChecksPolicyInput { get; }
```

- *Type:* object

---

##### `StrictRequiredStatusChecksPolicy`<sup>Required</sup> <a name="StrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy"></a>

```csharp
public object StrictRequiredStatusChecksPolicy { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetRulesRequiredStatusChecks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecks">OrganizationRulesetRulesRequiredStatusChecks</a>

---


### OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get"></a>

```csharp
private OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference <a name="OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId"></a>

```csharp
private void ResetIntegrationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput">IntegrationIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId">IntegrationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput"></a>

```csharp
public double IntegrationIdInput { get; }
```

- *Type:* double

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId"></a>

```csharp
public double IntegrationId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationRulesetRulesRequiredWorkflowsOutputReference <a name="OrganizationRulesetRulesRequiredWorkflowsOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredWorkflowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow">PutRequiredWorkflow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequiredWorkflow` <a name="PutRequiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow"></a>

```csharp
private void PutRequiredWorkflow(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.putRequiredWorkflow.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflow">RequiredWorkflow</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflowInput">RequiredWorkflowInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequiredWorkflow`<sup>Required</sup> <a name="RequiredWorkflow" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflow"></a>

```csharp
public OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList RequiredWorkflow { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList">OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList</a>

---

##### `RequiredWorkflowInput`<sup>Optional</sup> <a name="RequiredWorkflowInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.requiredWorkflowInput"></a>

```csharp
public object RequiredWorkflowInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetRulesRequiredWorkflows InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflows">OrganizationRulesetRulesRequiredWorkflows</a>

---


### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get"></a>

```csharp
private OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference <a name="OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resetRef">ResetRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRef` <a name="ResetRef" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.resetRef"></a>

```csharp
private void ResetRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryId">RepositoryId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryIdInput"></a>

```csharp
public double RepositoryIdInput { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.repositoryId"></a>

```csharp
public double RepositoryId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrganizationRulesetRulesTagNamePatternOutputReference <a name="OrganizationRulesetRulesTagNamePatternOutputReference" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new OrganizationRulesetRulesTagNamePatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePatternOutputReference.property.internalValue"></a>

```csharp
public OrganizationRulesetRulesTagNamePattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.organizationRuleset.OrganizationRulesetRulesTagNamePattern">OrganizationRulesetRulesTagNamePattern</a>

---



