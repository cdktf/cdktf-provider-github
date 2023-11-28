# `repositoryRuleset` Submodule <a name="`repositoryRuleset` Submodule" id="@cdktf/provider-github.repositoryRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryRuleset <a name="RepositoryRuleset" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset github_repository_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRuleset(Construct Scope, string Id, RepositoryRulesetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig">RepositoryRulesetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig">RepositoryRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putBypassActors">PutBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetBypassActors">ResetBypassActors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutBypassActors` <a name="PutBypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putBypassActors"></a>

```csharp
private void PutBypassActors(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putBypassActors.parameter.value"></a>

- *Type:* object

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putConditions"></a>

```csharp
private void PutConditions(RepositoryRulesetConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putRules"></a>

```csharp
private void PutRules(RepositoryRulesetRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.putRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

---

##### `ResetBypassActors` <a name="ResetBypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetBypassActors"></a>

```csharp
private void ResetBypassActors()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.resetRepository"></a>

```csharp
private void ResetRepository()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryRuleset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryRuleset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryRuleset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryRuleset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RepositoryRuleset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryRuleset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActors">BypassActors</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList">RepositoryRulesetBypassActorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference">RepositoryRulesetConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference">RepositoryRulesetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesetId">RulesetId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActorsInput">BypassActorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditionsInput">ConditionsInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcementInput">EnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesInput">RulesInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcement">Enforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BypassActors`<sup>Required</sup> <a name="BypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActors"></a>

```csharp
public RepositoryRulesetBypassActorsList BypassActors { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList">RepositoryRulesetBypassActorsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditions"></a>

```csharp
public RepositoryRulesetConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference">RepositoryRulesetConditionsOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rules"></a>

```csharp
public RepositoryRulesetRulesOutputReference Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference">RepositoryRulesetRulesOutputReference</a>

---

##### `RulesetId`<sup>Required</sup> <a name="RulesetId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesetId"></a>

```csharp
public double RulesetId { get; }
```

- *Type:* double

---

##### `BypassActorsInput`<sup>Optional</sup> <a name="BypassActorsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.bypassActorsInput"></a>

```csharp
public object BypassActorsInput { get; }
```

- *Type:* object

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.conditionsInput"></a>

```csharp
public RepositoryRulesetConditions ConditionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

---

##### `EnforcementInput`<sup>Optional</sup> <a name="EnforcementInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcementInput"></a>

```csharp
public string EnforcementInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.rulesInput"></a>

```csharp
public RepositoryRulesetRules RulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `Enforcement`<sup>Required</sup> <a name="Enforcement" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.enforcement"></a>

```csharp
public string Enforcement { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRuleset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryRulesetBypassActors <a name="RepositoryRulesetBypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetBypassActors {
    double ActorId,
    string ActorType,
    string BypassMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorId">ActorId</a></code> | <code>double</code> | The ID of the actor that can bypass a ruleset. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorType">ActorType</a></code> | <code>string</code> | The type of actor that can bypass a ruleset. Can be one of: `RepositoryRole`, `Team`, `Integration`, `OrganizationAdmin`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.bypassMode">BypassMode</a></code> | <code>string</code> | When the specified actor can bypass the ruleset. |

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorId"></a>

```csharp
public double ActorId { get; set; }
```

- *Type:* double

The ID of the actor that can bypass a ruleset.

When `actor_type` is `OrganizationAdmin`, this should be set to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#actor_id RepositoryRuleset#actor_id}

---

##### `ActorType`<sup>Required</sup> <a name="ActorType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.actorType"></a>

```csharp
public string ActorType { get; set; }
```

- *Type:* string

The type of actor that can bypass a ruleset. Can be one of: `RepositoryRole`, `Team`, `Integration`, `OrganizationAdmin`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#actor_type RepositoryRuleset#actor_type}

---

##### `BypassMode`<sup>Required</sup> <a name="BypassMode" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActors.property.bypassMode"></a>

```csharp
public string BypassMode { get; set; }
```

- *Type:* string

When the specified actor can bypass the ruleset.

pull_request means that an actor can only bypass rules on pull requests. Can be one of: `always`, `pull_request`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#bypass_mode RepositoryRuleset#bypass_mode}

---

### RepositoryRulesetConditions <a name="RepositoryRulesetConditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetConditions {
    RepositoryRulesetConditionsRefName RefName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions.property.refName">RefName</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a></code> | ref_name block. |

---

##### `RefName`<sup>Required</sup> <a name="RefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions.property.refName"></a>

```csharp
public RepositoryRulesetConditionsRefName RefName { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

ref_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#ref_name RepositoryRuleset#ref_name}

---

### RepositoryRulesetConditionsRefName <a name="RepositoryRulesetConditionsRefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetConditionsRefName {
    string[] Exclude,
    string[] Include
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.exclude">Exclude</a></code> | <code>string[]</code> | Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.include">Include</a></code> | <code>string[]</code> | Array of ref names or patterns to include. |

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.exclude"></a>

```csharp
public string[] Exclude { get; set; }
```

- *Type:* string[]

Array of ref names or patterns to exclude. The condition will not pass if any of these patterns match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#exclude RepositoryRuleset#exclude}

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName.property.include"></a>

```csharp
public string[] Include { get; set; }
```

- *Type:* string[]

Array of ref names or patterns to include.

One of these patterns must match for the condition to pass. Also accepts `~DEFAULT_BRANCH` to include the default branch or `~ALL` to include all branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#include RepositoryRuleset#include}

---

### RepositoryRulesetConfig <a name="RepositoryRulesetConfig" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Enforcement,
    string Name,
    RepositoryRulesetRules Rules,
    string Target,
    object BypassActors = null,
    RepositoryRulesetConditions Conditions = null,
    string Id = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.enforcement">Enforcement</a></code> | <code>string</code> | Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.name">Name</a></code> | <code>string</code> | The name of the ruleset. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a></code> | rules block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.target">Target</a></code> | <code>string</code> | Possible values are `branch` and `tag`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.bypassActors">BypassActors</a></code> | <code>object</code> | bypass_actors block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#id RepositoryRuleset#id}. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.repository">Repository</a></code> | <code>string</code> | Name of the repository to apply rulset to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enforcement`<sup>Required</sup> <a name="Enforcement" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.enforcement"></a>

```csharp
public string Enforcement { get; set; }
```

- *Type:* string

Possible values for Enforcement are `disabled`, `active`, `evaluate`. Note: `evaluate` is currently only supported for owners of type `organization`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#enforcement RepositoryRuleset#enforcement}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the ruleset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.rules"></a>

```csharp
public RepositoryRulesetRules Rules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#rules RepositoryRuleset#rules}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Possible values are `branch` and `tag`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#target RepositoryRuleset#target}

---

##### `BypassActors`<sup>Optional</sup> <a name="BypassActors" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.bypassActors"></a>

```csharp
public object BypassActors { get; set; }
```

- *Type:* object

bypass_actors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#bypass_actors RepositoryRuleset#bypass_actors}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.conditions"></a>

```csharp
public RepositoryRulesetConditions Conditions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#conditions RepositoryRuleset#conditions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#id RepositoryRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Name of the repository to apply rulset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#repository RepositoryRuleset#repository}

---

### RepositoryRulesetRules <a name="RepositoryRulesetRules" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRules {
    RepositoryRulesetRulesBranchNamePattern BranchNamePattern = null,
    RepositoryRulesetRulesCommitAuthorEmailPattern CommitAuthorEmailPattern = null,
    RepositoryRulesetRulesCommitMessagePattern CommitMessagePattern = null,
    RepositoryRulesetRulesCommitterEmailPattern CommitterEmailPattern = null,
    object Creation = null,
    object Deletion = null,
    object NonFastForward = null,
    RepositoryRulesetRulesPullRequest PullRequest = null,
    RepositoryRulesetRulesRequiredDeployments RequiredDeployments = null,
    object RequiredLinearHistory = null,
    object RequiredSignatures = null,
    RepositoryRulesetRulesRequiredStatusChecks RequiredStatusChecks = null,
    RepositoryRulesetRulesTagNamePattern TagNamePattern = null,
    object Update = null,
    object UpdateAllowsFetchAndMerge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.branchNamePattern">BranchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a></code> | branch_name_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitAuthorEmailPattern">CommitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a></code> | commit_author_email_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitMessagePattern">CommitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a></code> | commit_message_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.committerEmailPattern">CommitterEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a></code> | committer_email_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.creation">Creation</a></code> | <code>object</code> | Only allow users with bypass permission to create matching refs. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.deletion">Deletion</a></code> | <code>object</code> | Only allow users with bypass permissions to delete matching refs. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.nonFastForward">NonFastForward</a></code> | <code>object</code> | Prevent users with push access from force pushing to branches. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a></code> | pull_request block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredDeployments">RequiredDeployments</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a></code> | required_deployments block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>object</code> | Prevent merge commits from being pushed to matching branches. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredSignatures">RequiredSignatures</a></code> | <code>object</code> | Commits pushed to matching branches must have verified signatures. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a></code> | required_status_checks block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.tagNamePattern">TagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a></code> | tag_name_pattern block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.update">Update</a></code> | <code>object</code> | Only allow users with bypass permission to update matching refs. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.updateAllowsFetchAndMerge">UpdateAllowsFetchAndMerge</a></code> | <code>object</code> | Branch can pull changes from its upstream repository. |

---

##### `BranchNamePattern`<sup>Optional</sup> <a name="BranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.branchNamePattern"></a>

```csharp
public RepositoryRulesetRulesBranchNamePattern BranchNamePattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

branch_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#branch_name_pattern RepositoryRuleset#branch_name_pattern}

---

##### `CommitAuthorEmailPattern`<sup>Optional</sup> <a name="CommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitAuthorEmailPattern"></a>

```csharp
public RepositoryRulesetRulesCommitAuthorEmailPattern CommitAuthorEmailPattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

commit_author_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#commit_author_email_pattern RepositoryRuleset#commit_author_email_pattern}

---

##### `CommitMessagePattern`<sup>Optional</sup> <a name="CommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.commitMessagePattern"></a>

```csharp
public RepositoryRulesetRulesCommitMessagePattern CommitMessagePattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

commit_message_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#commit_message_pattern RepositoryRuleset#commit_message_pattern}

---

##### `CommitterEmailPattern`<sup>Optional</sup> <a name="CommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.committerEmailPattern"></a>

```csharp
public RepositoryRulesetRulesCommitterEmailPattern CommitterEmailPattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

committer_email_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#committer_email_pattern RepositoryRuleset#committer_email_pattern}

---

##### `Creation`<sup>Optional</sup> <a name="Creation" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.creation"></a>

```csharp
public object Creation { get; set; }
```

- *Type:* object

Only allow users with bypass permission to create matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#creation RepositoryRuleset#creation}

---

##### `Deletion`<sup>Optional</sup> <a name="Deletion" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.deletion"></a>

```csharp
public object Deletion { get; set; }
```

- *Type:* object

Only allow users with bypass permissions to delete matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#deletion RepositoryRuleset#deletion}

---

##### `NonFastForward`<sup>Optional</sup> <a name="NonFastForward" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.nonFastForward"></a>

```csharp
public object NonFastForward { get; set; }
```

- *Type:* object

Prevent users with push access from force pushing to branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#non_fast_forward RepositoryRuleset#non_fast_forward}

---

##### `PullRequest`<sup>Optional</sup> <a name="PullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.pullRequest"></a>

```csharp
public RepositoryRulesetRulesPullRequest PullRequest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

pull_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#pull_request RepositoryRuleset#pull_request}

---

##### `RequiredDeployments`<sup>Optional</sup> <a name="RequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredDeployments"></a>

```csharp
public RepositoryRulesetRulesRequiredDeployments RequiredDeployments { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

required_deployments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#required_deployments RepositoryRuleset#required_deployments}

---

##### `RequiredLinearHistory`<sup>Optional</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredLinearHistory"></a>

```csharp
public object RequiredLinearHistory { get; set; }
```

- *Type:* object

Prevent merge commits from being pushed to matching branches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#required_linear_history RepositoryRuleset#required_linear_history}

---

##### `RequiredSignatures`<sup>Optional</sup> <a name="RequiredSignatures" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredSignatures"></a>

```csharp
public object RequiredSignatures { get; set; }
```

- *Type:* object

Commits pushed to matching branches must have verified signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#required_signatures RepositoryRuleset#required_signatures}

---

##### `RequiredStatusChecks`<sup>Optional</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.requiredStatusChecks"></a>

```csharp
public RepositoryRulesetRulesRequiredStatusChecks RequiredStatusChecks { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

required_status_checks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#required_status_checks RepositoryRuleset#required_status_checks}

---

##### `TagNamePattern`<sup>Optional</sup> <a name="TagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.tagNamePattern"></a>

```csharp
public RepositoryRulesetRulesTagNamePattern TagNamePattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

tag_name_pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#tag_name_pattern RepositoryRuleset#tag_name_pattern}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.update"></a>

```csharp
public object Update { get; set; }
```

- *Type:* object

Only allow users with bypass permission to update matching refs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#update RepositoryRuleset#update}

---

##### `UpdateAllowsFetchAndMerge`<sup>Optional</sup> <a name="UpdateAllowsFetchAndMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules.property.updateAllowsFetchAndMerge"></a>

```csharp
public object UpdateAllowsFetchAndMerge { get; set; }
```

- *Type:* object

Branch can pull changes from its upstream repository.

This is only applicable to forked repositories. Requires `update` to be set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#update_allows_fetch_and_merge RepositoryRuleset#update_allows_fetch_and_merge}

---

### RepositoryRulesetRulesBranchNamePattern <a name="RepositoryRulesetRulesBranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesBranchNamePattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesCommitAuthorEmailPattern <a name="RepositoryRulesetRulesCommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesCommitAuthorEmailPattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesCommitMessagePattern <a name="RepositoryRulesetRulesCommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesCommitMessagePattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesCommitterEmailPattern <a name="RepositoryRulesetRulesCommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesCommitterEmailPattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

### RepositoryRulesetRulesPullRequest <a name="RepositoryRulesetRulesPullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesPullRequest {
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
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.dismissStaleReviewsOnPush">DismissStaleReviewsOnPush</a></code> | <code>object</code> | New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireCodeOwnerReview">RequireCodeOwnerReview</a></code> | <code>object</code> | Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | The number of approving reviews that are required before a pull request can be merged. Defaults to `0`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredReviewThreadResolution">RequiredReviewThreadResolution</a></code> | <code>object</code> | All conversations on code must be resolved before a pull request can be merged. Defaults to `false`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>object</code> | Whether the most recent reviewable push must be approved by someone other than the person who pushed it. |

---

##### `DismissStaleReviewsOnPush`<sup>Optional</sup> <a name="DismissStaleReviewsOnPush" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.dismissStaleReviewsOnPush"></a>

```csharp
public object DismissStaleReviewsOnPush { get; set; }
```

- *Type:* object

New, reviewable commits pushed will dismiss previous pull request review approvals. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#dismiss_stale_reviews_on_push RepositoryRuleset#dismiss_stale_reviews_on_push}

---

##### `RequireCodeOwnerReview`<sup>Optional</sup> <a name="RequireCodeOwnerReview" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireCodeOwnerReview"></a>

```csharp
public object RequireCodeOwnerReview { get; set; }
```

- *Type:* object

Require an approving review in pull requests that modify files that have a designated code owner. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#require_code_owner_review RepositoryRuleset#require_code_owner_review}

---

##### `RequiredApprovingReviewCount`<sup>Optional</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; set; }
```

- *Type:* double

The number of approving reviews that are required before a pull request can be merged. Defaults to `0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#required_approving_review_count RepositoryRuleset#required_approving_review_count}

---

##### `RequiredReviewThreadResolution`<sup>Optional</sup> <a name="RequiredReviewThreadResolution" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requiredReviewThreadResolution"></a>

```csharp
public object RequiredReviewThreadResolution { get; set; }
```

- *Type:* object

All conversations on code must be resolved before a pull request can be merged. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#required_review_thread_resolution RepositoryRuleset#required_review_thread_resolution}

---

##### `RequireLastPushApproval`<sup>Optional</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest.property.requireLastPushApproval"></a>

```csharp
public object RequireLastPushApproval { get; set; }
```

- *Type:* object

Whether the most recent reviewable push must be approved by someone other than the person who pushed it.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#require_last_push_approval RepositoryRuleset#require_last_push_approval}

---

### RepositoryRulesetRulesRequiredDeployments <a name="RepositoryRulesetRulesRequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesRequiredDeployments {
    string[] RequiredDeploymentEnvironments
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments.property.requiredDeploymentEnvironments">RequiredDeploymentEnvironments</a></code> | <code>string[]</code> | The environments that must be successfully deployed to before branches can be merged. |

---

##### `RequiredDeploymentEnvironments`<sup>Required</sup> <a name="RequiredDeploymentEnvironments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments.property.requiredDeploymentEnvironments"></a>

```csharp
public string[] RequiredDeploymentEnvironments { get; set; }
```

- *Type:* string[]

The environments that must be successfully deployed to before branches can be merged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#required_deployment_environments RepositoryRuleset#required_deployment_environments}

---

### RepositoryRulesetRulesRequiredStatusChecks <a name="RepositoryRulesetRulesRequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesRequiredStatusChecks {
    object RequiredCheck,
    object StrictRequiredStatusChecksPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.requiredCheck">RequiredCheck</a></code> | <code>object</code> | required_check block. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy">StrictRequiredStatusChecksPolicy</a></code> | <code>object</code> | Whether pull requests targeting a matching branch must be tested with the latest code. |

---

##### `RequiredCheck`<sup>Required</sup> <a name="RequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.requiredCheck"></a>

```csharp
public object RequiredCheck { get; set; }
```

- *Type:* object

required_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#required_check RepositoryRuleset#required_check}

---

##### `StrictRequiredStatusChecksPolicy`<sup>Optional</sup> <a name="StrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks.property.strictRequiredStatusChecksPolicy"></a>

```csharp
public object StrictRequiredStatusChecksPolicy { get; set; }
```

- *Type:* object

Whether pull requests targeting a matching branch must be tested with the latest code.

This setting will not take effect unless at least one status check is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#strict_required_status_checks_policy RepositoryRuleset#strict_required_status_checks_policy}

---

### RepositoryRulesetRulesRequiredStatusChecksRequiredCheck <a name="RepositoryRulesetRulesRequiredStatusChecksRequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesRequiredStatusChecksRequiredCheck {
    string Context,
    double IntegrationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.context">Context</a></code> | <code>string</code> | The status check context name that must be present on the commit. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId">IntegrationId</a></code> | <code>double</code> | The optional integration ID that this status check must originate from. |

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.context"></a>

```csharp
public string Context { get; set; }
```

- *Type:* string

The status check context name that must be present on the commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#context RepositoryRuleset#context}

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheck.property.integrationId"></a>

```csharp
public double IntegrationId { get; set; }
```

- *Type:* double

The optional integration ID that this status check must originate from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#integration_id RepositoryRuleset#integration_id}

---

### RepositoryRulesetRulesTagNamePattern <a name="RepositoryRulesetRulesTagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesTagNamePattern {
    string Operator,
    string Pattern,
    string Name = null,
    object Negate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.operator">Operator</a></code> | <code>string</code> | The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.pattern">Pattern</a></code> | <code>string</code> | The pattern to match with. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.name">Name</a></code> | <code>string</code> | How this rule will appear to users. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.negate">Negate</a></code> | <code>object</code> | If true, the rule will fail if the pattern matches. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator to use for matching. Can be one of: `starts_with`, `ends_with`, `contains`, `regex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#operator RepositoryRuleset#operator}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern to match with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#pattern RepositoryRuleset#pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

How this rule will appear to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#name RepositoryRuleset#name}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

If true, the rule will fail if the pattern matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_ruleset#negate RepositoryRuleset#negate}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryRulesetBypassActorsList <a name="RepositoryRulesetBypassActorsList" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetBypassActorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.get"></a>

```csharp
private RepositoryRulesetBypassActorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RepositoryRulesetBypassActorsOutputReference <a name="RepositoryRulesetBypassActorsOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetBypassActorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorIdInput">ActorIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorTypeInput">ActorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassModeInput">BypassModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorId">ActorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorType">ActorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassMode">BypassMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActorIdInput`<sup>Optional</sup> <a name="ActorIdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorIdInput"></a>

```csharp
public double ActorIdInput { get; }
```

- *Type:* double

---

##### `ActorTypeInput`<sup>Optional</sup> <a name="ActorTypeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorTypeInput"></a>

```csharp
public string ActorTypeInput { get; }
```

- *Type:* string

---

##### `BypassModeInput`<sup>Optional</sup> <a name="BypassModeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassModeInput"></a>

```csharp
public string BypassModeInput { get; }
```

- *Type:* string

---

##### `ActorId`<sup>Required</sup> <a name="ActorId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorId"></a>

```csharp
public double ActorId { get; }
```

- *Type:* double

---

##### `ActorType`<sup>Required</sup> <a name="ActorType" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.actorType"></a>

```csharp
public string ActorType { get; }
```

- *Type:* string

---

##### `BypassMode`<sup>Required</sup> <a name="BypassMode" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.bypassMode"></a>

```csharp
public string BypassMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetBypassActorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RepositoryRulesetConditionsOutputReference <a name="RepositoryRulesetConditionsOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.putRefName">PutRefName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRefName` <a name="PutRefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.putRefName"></a>

```csharp
private void PutRefName(RepositoryRulesetConditionsRefName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.putRefName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refName">RefName</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference">RepositoryRulesetConditionsRefNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refNameInput">RefNameInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RefName`<sup>Required</sup> <a name="RefName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refName"></a>

```csharp
public RepositoryRulesetConditionsRefNameOutputReference RefName { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference">RepositoryRulesetConditionsRefNameOutputReference</a>

---

##### `RefNameInput`<sup>Optional</sup> <a name="RefNameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.refNameInput"></a>

```csharp
public RepositoryRulesetConditionsRefName RefNameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditions">RepositoryRulesetConditions</a>

---


### RepositoryRulesetConditionsRefNameOutputReference <a name="RepositoryRulesetConditionsRefNameOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetConditionsRefNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.includeInput">IncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.exclude">Exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.excludeInput"></a>

```csharp
public string[] ExcludeInput { get; }
```

- *Type:* string[]

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.includeInput"></a>

```csharp
public string[] IncludeInput { get; }
```

- *Type:* string[]

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.exclude"></a>

```csharp
public string[] Exclude { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefNameOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetConditionsRefName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetConditionsRefName">RepositoryRulesetConditionsRefName</a>

---


### RepositoryRulesetRulesBranchNamePatternOutputReference <a name="RepositoryRulesetRulesBranchNamePatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesBranchNamePatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetRulesBranchNamePattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

---


### RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference <a name="RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetRulesCommitAuthorEmailPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

---


### RepositoryRulesetRulesCommitMessagePatternOutputReference <a name="RepositoryRulesetRulesCommitMessagePatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesCommitMessagePatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetRulesCommitMessagePattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

---


### RepositoryRulesetRulesCommitterEmailPatternOutputReference <a name="RepositoryRulesetRulesCommitterEmailPatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesCommitterEmailPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetRulesCommitterEmailPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

---


### RepositoryRulesetRulesOutputReference <a name="RepositoryRulesetRulesOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putBranchNamePattern">PutBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitAuthorEmailPattern">PutCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitMessagePattern">PutCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitterEmailPattern">PutCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putPullRequest">PutPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredDeployments">PutRequiredDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredStatusChecks">PutRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putTagNamePattern">PutTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetBranchNamePattern">ResetBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitAuthorEmailPattern">ResetCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitMessagePattern">ResetCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitterEmailPattern">ResetCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCreation">ResetCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetDeletion">ResetDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetNonFastForward">ResetNonFastForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetPullRequest">ResetPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredDeployments">ResetRequiredDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredLinearHistory">ResetRequiredLinearHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredSignatures">ResetRequiredSignatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredStatusChecks">ResetRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetTagNamePattern">ResetTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdateAllowsFetchAndMerge">ResetUpdateAllowsFetchAndMerge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBranchNamePattern` <a name="PutBranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putBranchNamePattern"></a>

```csharp
private void PutBranchNamePattern(RepositoryRulesetRulesBranchNamePattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putBranchNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

---

##### `PutCommitAuthorEmailPattern` <a name="PutCommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitAuthorEmailPattern"></a>

```csharp
private void PutCommitAuthorEmailPattern(RepositoryRulesetRulesCommitAuthorEmailPattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitAuthorEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

---

##### `PutCommitMessagePattern` <a name="PutCommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitMessagePattern"></a>

```csharp
private void PutCommitMessagePattern(RepositoryRulesetRulesCommitMessagePattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitMessagePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

---

##### `PutCommitterEmailPattern` <a name="PutCommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitterEmailPattern"></a>

```csharp
private void PutCommitterEmailPattern(RepositoryRulesetRulesCommitterEmailPattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putCommitterEmailPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

---

##### `PutPullRequest` <a name="PutPullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putPullRequest"></a>

```csharp
private void PutPullRequest(RepositoryRulesetRulesPullRequest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putPullRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

---

##### `PutRequiredDeployments` <a name="PutRequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredDeployments"></a>

```csharp
private void PutRequiredDeployments(RepositoryRulesetRulesRequiredDeployments Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredDeployments.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

---

##### `PutRequiredStatusChecks` <a name="PutRequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredStatusChecks"></a>

```csharp
private void PutRequiredStatusChecks(RepositoryRulesetRulesRequiredStatusChecks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putRequiredStatusChecks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

---

##### `PutTagNamePattern` <a name="PutTagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putTagNamePattern"></a>

```csharp
private void PutTagNamePattern(RepositoryRulesetRulesTagNamePattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.putTagNamePattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

---

##### `ResetBranchNamePattern` <a name="ResetBranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetBranchNamePattern"></a>

```csharp
private void ResetBranchNamePattern()
```

##### `ResetCommitAuthorEmailPattern` <a name="ResetCommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitAuthorEmailPattern"></a>

```csharp
private void ResetCommitAuthorEmailPattern()
```

##### `ResetCommitMessagePattern` <a name="ResetCommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitMessagePattern"></a>

```csharp
private void ResetCommitMessagePattern()
```

##### `ResetCommitterEmailPattern` <a name="ResetCommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCommitterEmailPattern"></a>

```csharp
private void ResetCommitterEmailPattern()
```

##### `ResetCreation` <a name="ResetCreation" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetCreation"></a>

```csharp
private void ResetCreation()
```

##### `ResetDeletion` <a name="ResetDeletion" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetDeletion"></a>

```csharp
private void ResetDeletion()
```

##### `ResetNonFastForward` <a name="ResetNonFastForward" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetNonFastForward"></a>

```csharp
private void ResetNonFastForward()
```

##### `ResetPullRequest` <a name="ResetPullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetPullRequest"></a>

```csharp
private void ResetPullRequest()
```

##### `ResetRequiredDeployments` <a name="ResetRequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredDeployments"></a>

```csharp
private void ResetRequiredDeployments()
```

##### `ResetRequiredLinearHistory` <a name="ResetRequiredLinearHistory" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredLinearHistory"></a>

```csharp
private void ResetRequiredLinearHistory()
```

##### `ResetRequiredSignatures` <a name="ResetRequiredSignatures" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredSignatures"></a>

```csharp
private void ResetRequiredSignatures()
```

##### `ResetRequiredStatusChecks` <a name="ResetRequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetRequiredStatusChecks"></a>

```csharp
private void ResetRequiredStatusChecks()
```

##### `ResetTagNamePattern` <a name="ResetTagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetTagNamePattern"></a>

```csharp
private void ResetTagNamePattern()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```

##### `ResetUpdateAllowsFetchAndMerge` <a name="ResetUpdateAllowsFetchAndMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.resetUpdateAllowsFetchAndMerge"></a>

```csharp
private void ResetUpdateAllowsFetchAndMerge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePattern">BranchNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference">RepositoryRulesetRulesBranchNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPattern">CommitAuthorEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference">RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePattern">CommitMessagePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference">RepositoryRulesetRulesCommitMessagePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPattern">CommitterEmailPattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference">RepositoryRulesetRulesCommitterEmailPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequest">PullRequest</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference">RepositoryRulesetRulesPullRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeployments">RequiredDeployments</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference">RepositoryRulesetRulesRequiredDeploymentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecks">RequiredStatusChecks</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference">RepositoryRulesetRulesRequiredStatusChecksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePattern">TagNamePattern</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference">RepositoryRulesetRulesTagNamePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePatternInput">BranchNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPatternInput">CommitAuthorEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePatternInput">CommitMessagePatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPatternInput">CommitterEmailPatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationInput">CreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletionInput">DeletionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForwardInput">NonFastForwardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequestInput">PullRequestInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeploymentsInput">RequiredDeploymentsInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistoryInput">RequiredLinearHistoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignaturesInput">RequiredSignaturesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecksInput">RequiredStatusChecksInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePatternInput">TagNamePatternInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMergeInput">UpdateAllowsFetchAndMergeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateInput">UpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creation">Creation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletion">Deletion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForward">NonFastForward</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistory">RequiredLinearHistory</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignatures">RequiredSignatures</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.update">Update</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMerge">UpdateAllowsFetchAndMerge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchNamePattern`<sup>Required</sup> <a name="BranchNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePattern"></a>

```csharp
public RepositoryRulesetRulesBranchNamePatternOutputReference BranchNamePattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePatternOutputReference">RepositoryRulesetRulesBranchNamePatternOutputReference</a>

---

##### `CommitAuthorEmailPattern`<sup>Required</sup> <a name="CommitAuthorEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPattern"></a>

```csharp
public RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference CommitAuthorEmailPattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference">RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference</a>

---

##### `CommitMessagePattern`<sup>Required</sup> <a name="CommitMessagePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePattern"></a>

```csharp
public RepositoryRulesetRulesCommitMessagePatternOutputReference CommitMessagePattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePatternOutputReference">RepositoryRulesetRulesCommitMessagePatternOutputReference</a>

---

##### `CommitterEmailPattern`<sup>Required</sup> <a name="CommitterEmailPattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPattern"></a>

```csharp
public RepositoryRulesetRulesCommitterEmailPatternOutputReference CommitterEmailPattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPatternOutputReference">RepositoryRulesetRulesCommitterEmailPatternOutputReference</a>

---

##### `PullRequest`<sup>Required</sup> <a name="PullRequest" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequest"></a>

```csharp
public RepositoryRulesetRulesPullRequestOutputReference PullRequest { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference">RepositoryRulesetRulesPullRequestOutputReference</a>

---

##### `RequiredDeployments`<sup>Required</sup> <a name="RequiredDeployments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeployments"></a>

```csharp
public RepositoryRulesetRulesRequiredDeploymentsOutputReference RequiredDeployments { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference">RepositoryRulesetRulesRequiredDeploymentsOutputReference</a>

---

##### `RequiredStatusChecks`<sup>Required</sup> <a name="RequiredStatusChecks" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecks"></a>

```csharp
public RepositoryRulesetRulesRequiredStatusChecksOutputReference RequiredStatusChecks { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference">RepositoryRulesetRulesRequiredStatusChecksOutputReference</a>

---

##### `TagNamePattern`<sup>Required</sup> <a name="TagNamePattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePattern"></a>

```csharp
public RepositoryRulesetRulesTagNamePatternOutputReference TagNamePattern { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference">RepositoryRulesetRulesTagNamePatternOutputReference</a>

---

##### `BranchNamePatternInput`<sup>Optional</sup> <a name="BranchNamePatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.branchNamePatternInput"></a>

```csharp
public RepositoryRulesetRulesBranchNamePattern BranchNamePatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesBranchNamePattern">RepositoryRulesetRulesBranchNamePattern</a>

---

##### `CommitAuthorEmailPatternInput`<sup>Optional</sup> <a name="CommitAuthorEmailPatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitAuthorEmailPatternInput"></a>

```csharp
public RepositoryRulesetRulesCommitAuthorEmailPattern CommitAuthorEmailPatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitAuthorEmailPattern">RepositoryRulesetRulesCommitAuthorEmailPattern</a>

---

##### `CommitMessagePatternInput`<sup>Optional</sup> <a name="CommitMessagePatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.commitMessagePatternInput"></a>

```csharp
public RepositoryRulesetRulesCommitMessagePattern CommitMessagePatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitMessagePattern">RepositoryRulesetRulesCommitMessagePattern</a>

---

##### `CommitterEmailPatternInput`<sup>Optional</sup> <a name="CommitterEmailPatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.committerEmailPatternInput"></a>

```csharp
public RepositoryRulesetRulesCommitterEmailPattern CommitterEmailPatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesCommitterEmailPattern">RepositoryRulesetRulesCommitterEmailPattern</a>

---

##### `CreationInput`<sup>Optional</sup> <a name="CreationInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creationInput"></a>

```csharp
public object CreationInput { get; }
```

- *Type:* object

---

##### `DeletionInput`<sup>Optional</sup> <a name="DeletionInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletionInput"></a>

```csharp
public object DeletionInput { get; }
```

- *Type:* object

---

##### `NonFastForwardInput`<sup>Optional</sup> <a name="NonFastForwardInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForwardInput"></a>

```csharp
public object NonFastForwardInput { get; }
```

- *Type:* object

---

##### `PullRequestInput`<sup>Optional</sup> <a name="PullRequestInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.pullRequestInput"></a>

```csharp
public RepositoryRulesetRulesPullRequest PullRequestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

---

##### `RequiredDeploymentsInput`<sup>Optional</sup> <a name="RequiredDeploymentsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredDeploymentsInput"></a>

```csharp
public RepositoryRulesetRulesRequiredDeployments RequiredDeploymentsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

---

##### `RequiredLinearHistoryInput`<sup>Optional</sup> <a name="RequiredLinearHistoryInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistoryInput"></a>

```csharp
public object RequiredLinearHistoryInput { get; }
```

- *Type:* object

---

##### `RequiredSignaturesInput`<sup>Optional</sup> <a name="RequiredSignaturesInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignaturesInput"></a>

```csharp
public object RequiredSignaturesInput { get; }
```

- *Type:* object

---

##### `RequiredStatusChecksInput`<sup>Optional</sup> <a name="RequiredStatusChecksInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredStatusChecksInput"></a>

```csharp
public RepositoryRulesetRulesRequiredStatusChecks RequiredStatusChecksInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

---

##### `TagNamePatternInput`<sup>Optional</sup> <a name="TagNamePatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.tagNamePatternInput"></a>

```csharp
public RepositoryRulesetRulesTagNamePattern TagNamePatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

---

##### `UpdateAllowsFetchAndMergeInput`<sup>Optional</sup> <a name="UpdateAllowsFetchAndMergeInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMergeInput"></a>

```csharp
public object UpdateAllowsFetchAndMergeInput { get; }
```

- *Type:* object

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateInput"></a>

```csharp
public object UpdateInput { get; }
```

- *Type:* object

---

##### `Creation`<sup>Required</sup> <a name="Creation" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.creation"></a>

```csharp
public object Creation { get; }
```

- *Type:* object

---

##### `Deletion`<sup>Required</sup> <a name="Deletion" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.deletion"></a>

```csharp
public object Deletion { get; }
```

- *Type:* object

---

##### `NonFastForward`<sup>Required</sup> <a name="NonFastForward" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.nonFastForward"></a>

```csharp
public object NonFastForward { get; }
```

- *Type:* object

---

##### `RequiredLinearHistory`<sup>Required</sup> <a name="RequiredLinearHistory" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredLinearHistory"></a>

```csharp
public object RequiredLinearHistory { get; }
```

- *Type:* object

---

##### `RequiredSignatures`<sup>Required</sup> <a name="RequiredSignatures" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.requiredSignatures"></a>

```csharp
public object RequiredSignatures { get; }
```

- *Type:* object

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.update"></a>

```csharp
public object Update { get; }
```

- *Type:* object

---

##### `UpdateAllowsFetchAndMerge`<sup>Required</sup> <a name="UpdateAllowsFetchAndMerge" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.updateAllowsFetchAndMerge"></a>

```csharp
public object UpdateAllowsFetchAndMerge { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRules">RepositoryRulesetRules</a>

---


### RepositoryRulesetRulesPullRequestOutputReference <a name="RepositoryRulesetRulesPullRequestOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesPullRequestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush">ResetDismissStaleReviewsOnPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview">ResetRequireCodeOwnerReview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount">ResetRequiredApprovingReviewCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution">ResetRequiredReviewThreadResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval">ResetRequireLastPushApproval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDismissStaleReviewsOnPush` <a name="ResetDismissStaleReviewsOnPush" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetDismissStaleReviewsOnPush"></a>

```csharp
private void ResetDismissStaleReviewsOnPush()
```

##### `ResetRequireCodeOwnerReview` <a name="ResetRequireCodeOwnerReview" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireCodeOwnerReview"></a>

```csharp
private void ResetRequireCodeOwnerReview()
```

##### `ResetRequiredApprovingReviewCount` <a name="ResetRequiredApprovingReviewCount" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredApprovingReviewCount"></a>

```csharp
private void ResetRequiredApprovingReviewCount()
```

##### `ResetRequiredReviewThreadResolution` <a name="ResetRequiredReviewThreadResolution" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequiredReviewThreadResolution"></a>

```csharp
private void ResetRequiredReviewThreadResolution()
```

##### `ResetRequireLastPushApproval` <a name="ResetRequireLastPushApproval" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.resetRequireLastPushApproval"></a>

```csharp
private void ResetRequireLastPushApproval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput">DismissStaleReviewsOnPushInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput">RequireCodeOwnerReviewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput">RequiredApprovingReviewCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput">RequiredReviewThreadResolutionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput">RequireLastPushApprovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush">DismissStaleReviewsOnPush</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview">RequireCodeOwnerReview</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount">RequiredApprovingReviewCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution">RequiredReviewThreadResolution</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApproval">RequireLastPushApproval</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DismissStaleReviewsOnPushInput`<sup>Optional</sup> <a name="DismissStaleReviewsOnPushInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPushInput"></a>

```csharp
public object DismissStaleReviewsOnPushInput { get; }
```

- *Type:* object

---

##### `RequireCodeOwnerReviewInput`<sup>Optional</sup> <a name="RequireCodeOwnerReviewInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReviewInput"></a>

```csharp
public object RequireCodeOwnerReviewInput { get; }
```

- *Type:* object

---

##### `RequiredApprovingReviewCountInput`<sup>Optional</sup> <a name="RequiredApprovingReviewCountInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCountInput"></a>

```csharp
public double RequiredApprovingReviewCountInput { get; }
```

- *Type:* double

---

##### `RequiredReviewThreadResolutionInput`<sup>Optional</sup> <a name="RequiredReviewThreadResolutionInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolutionInput"></a>

```csharp
public object RequiredReviewThreadResolutionInput { get; }
```

- *Type:* object

---

##### `RequireLastPushApprovalInput`<sup>Optional</sup> <a name="RequireLastPushApprovalInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApprovalInput"></a>

```csharp
public object RequireLastPushApprovalInput { get; }
```

- *Type:* object

---

##### `DismissStaleReviewsOnPush`<sup>Required</sup> <a name="DismissStaleReviewsOnPush" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.dismissStaleReviewsOnPush"></a>

```csharp
public object DismissStaleReviewsOnPush { get; }
```

- *Type:* object

---

##### `RequireCodeOwnerReview`<sup>Required</sup> <a name="RequireCodeOwnerReview" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireCodeOwnerReview"></a>

```csharp
public object RequireCodeOwnerReview { get; }
```

- *Type:* object

---

##### `RequiredApprovingReviewCount`<sup>Required</sup> <a name="RequiredApprovingReviewCount" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredApprovingReviewCount"></a>

```csharp
public double RequiredApprovingReviewCount { get; }
```

- *Type:* double

---

##### `RequiredReviewThreadResolution`<sup>Required</sup> <a name="RequiredReviewThreadResolution" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requiredReviewThreadResolution"></a>

```csharp
public object RequiredReviewThreadResolution { get; }
```

- *Type:* object

---

##### `RequireLastPushApproval`<sup>Required</sup> <a name="RequireLastPushApproval" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.requireLastPushApproval"></a>

```csharp
public object RequireLastPushApproval { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequestOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetRulesPullRequest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesPullRequest">RepositoryRulesetRulesPullRequest</a>

---


### RepositoryRulesetRulesRequiredDeploymentsOutputReference <a name="RepositoryRulesetRulesRequiredDeploymentsOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesRequiredDeploymentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironmentsInput">RequiredDeploymentEnvironmentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironments">RequiredDeploymentEnvironments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequiredDeploymentEnvironmentsInput`<sup>Optional</sup> <a name="RequiredDeploymentEnvironmentsInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironmentsInput"></a>

```csharp
public string[] RequiredDeploymentEnvironmentsInput { get; }
```

- *Type:* string[]

---

##### `RequiredDeploymentEnvironments`<sup>Required</sup> <a name="RequiredDeploymentEnvironments" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.requiredDeploymentEnvironments"></a>

```csharp
public string[] RequiredDeploymentEnvironments { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeploymentsOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetRulesRequiredDeployments InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredDeployments">RepositoryRulesetRulesRequiredDeployments</a>

---


### RepositoryRulesetRulesRequiredStatusChecksOutputReference <a name="RepositoryRulesetRulesRequiredStatusChecksOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesRequiredStatusChecksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck">PutRequiredCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy">ResetStrictRequiredStatusChecksPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequiredCheck` <a name="PutRequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck"></a>

```csharp
private void PutRequiredCheck(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.putRequiredCheck.parameter.value"></a>

- *Type:* object

---

##### `ResetStrictRequiredStatusChecksPolicy` <a name="ResetStrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.resetStrictRequiredStatusChecksPolicy"></a>

```csharp
private void ResetStrictRequiredStatusChecksPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck">RequiredCheck</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList">RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput">RequiredCheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput">StrictRequiredStatusChecksPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy">StrictRequiredStatusChecksPolicy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequiredCheck`<sup>Required</sup> <a name="RequiredCheck" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheck"></a>

```csharp
public RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList RequiredCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList">RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList</a>

---

##### `RequiredCheckInput`<sup>Optional</sup> <a name="RequiredCheckInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.requiredCheckInput"></a>

```csharp
public object RequiredCheckInput { get; }
```

- *Type:* object

---

##### `StrictRequiredStatusChecksPolicyInput`<sup>Optional</sup> <a name="StrictRequiredStatusChecksPolicyInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicyInput"></a>

```csharp
public object StrictRequiredStatusChecksPolicyInput { get; }
```

- *Type:* object

---

##### `StrictRequiredStatusChecksPolicy`<sup>Required</sup> <a name="StrictRequiredStatusChecksPolicy" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.strictRequiredStatusChecksPolicy"></a>

```csharp
public object StrictRequiredStatusChecksPolicy { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetRulesRequiredStatusChecks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecks">RepositoryRulesetRulesRequiredStatusChecks</a>

---


### RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList <a name="RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.get"></a>

```csharp
private RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference <a name="RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.resetIntegrationId"></a>

```csharp
private void ResetIntegrationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput">ContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput">IntegrationIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context">Context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId">IntegrationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContextInput`<sup>Optional</sup> <a name="ContextInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.contextInput"></a>

```csharp
public string ContextInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationIdInput"></a>

```csharp
public double IntegrationIdInput { get; }
```

- *Type:* double

---

##### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.context"></a>

```csharp
public string Context { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.integrationId"></a>

```csharp
public double IntegrationId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RepositoryRulesetRulesTagNamePatternOutputReference <a name="RepositoryRulesetRulesTagNamePatternOutputReference" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryRulesetRulesTagNamePatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePatternOutputReference.property.internalValue"></a>

```csharp
public RepositoryRulesetRulesTagNamePattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryRuleset.RepositoryRulesetRulesTagNamePattern">RepositoryRulesetRulesTagNamePattern</a>

---



