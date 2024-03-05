# `actionsOrganizationVariable` Submodule <a name="`actionsOrganizationVariable` Submodule" id="@cdktf/provider-github.actionsOrganizationVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationVariable <a name="ActionsOrganizationVariable" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/resources/actions_organization_variable github_actions_organization_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationVariable(Construct Scope, string Id, ActionsOrganizationVariableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig">ActionsOrganizationVariableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig">ActionsOrganizationVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetSelectedRepositoryIds">ResetSelectedRepositoryIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSelectedRepositoryIds` <a name="ResetSelectedRepositoryIds" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.resetSelectedRepositoryIds"></a>

```csharp
private void ResetSelectedRepositoryIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsOrganizationVariable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationVariable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationVariable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationVariable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationVariable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ActionsOrganizationVariable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsOrganizationVariable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsOrganizationVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/resources/actions_organization_variable#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.selectedRepositoryIdsInput">SelectedRepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.variableNameInput">VariableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.variableName">VariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIdsInput`<sup>Optional</sup> <a name="SelectedRepositoryIdsInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.selectedRepositoryIdsInput"></a>

```csharp
public double[] SelectedRepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableNameInput`<sup>Optional</sup> <a name="VariableNameInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.variableNameInput"></a>

```csharp
public string VariableNameInput { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SelectedRepositoryIds`<sup>Required</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; }
```

- *Type:* double[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.variableName"></a>

```csharp
public string VariableName { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationVariableConfig <a name="ActionsOrganizationVariableConfig" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationVariableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Value,
    string VariableName,
    string Visibility,
    string Id = null,
    double[] SelectedRepositoryIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.value">Value</a></code> | <code>string</code> | Value of the variable. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.variableName">VariableName</a></code> | <code>string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.visibility">Visibility</a></code> | <code>string</code> | Configures the access that repositories have to the organization variable. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/resources/actions_organization_variable#id ActionsOrganizationVariable#id}. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.selectedRepositoryIds">SelectedRepositoryIds</a></code> | <code>double[]</code> | An array of repository ids that can access the organization variable. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/resources/actions_organization_variable#value ActionsOrganizationVariable#value}

---

##### `VariableName`<sup>Required</sup> <a name="VariableName" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.variableName"></a>

```csharp
public string VariableName { get; set; }
```

- *Type:* string

Name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/resources/actions_organization_variable#variable_name ActionsOrganizationVariable#variable_name}

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Configures the access that repositories have to the organization variable.

Must be one of 'all', 'private', or 'selected'. 'selected_repository_ids' is required if set to 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/resources/actions_organization_variable#visibility ActionsOrganizationVariable#visibility}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/resources/actions_organization_variable#id ActionsOrganizationVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SelectedRepositoryIds`<sup>Optional</sup> <a name="SelectedRepositoryIds" id="@cdktf/provider-github.actionsOrganizationVariable.ActionsOrganizationVariableConfig.property.selectedRepositoryIds"></a>

```csharp
public double[] SelectedRepositoryIds { get; set; }
```

- *Type:* double[]

An array of repository ids that can access the organization variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.0.1/docs/resources/actions_organization_variable#selected_repository_ids ActionsOrganizationVariable#selected_repository_ids}

---



